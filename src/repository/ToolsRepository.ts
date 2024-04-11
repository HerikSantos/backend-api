import { AppDataSource } from "../database";
import { Tags } from "../entities/Tags";
import { Tools } from "../entities/Tools";
import { type IRequest, type IToolsRepository } from "./IToolsRepository";

class ToolsRepository implements IToolsRepository {
    async create({ title, description, link, tags }: IRequest): Promise<Tools> {
        if (tags.length === 1) {
            const tagsEntity = new Tags();
            const toolsEntity = new Tools();

            const [tag] = tags;
            tagsEntity.tags = tag;
            await AppDataSource.manager.save(tagsEntity);

            toolsEntity.tags = [tagsEntity];
            toolsEntity.title = title;
            toolsEntity.link = link;
            toolsEntity.description = description;
            const tools = await AppDataSource.manager.save(toolsEntity);
            return tools;
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        const arrayOfTags: Tags[] = [];
        const toolsEntity = new Tools();

        for (const tag of tags) {
            const tagsEntity = new Tags();

            tagsEntity.tags = tag;
            toolsEntity.title = title;
            toolsEntity.link = link;
            toolsEntity.description = description;

            arrayOfTags.push(tagsEntity);
            await AppDataSource.manager.save(tagsEntity);
        }

        toolsEntity.tags = arrayOfTags;
        const tools = await AppDataSource.manager.save(toolsEntity);
        return tools;
    }

    async list(tagFilter: string): Promise<Tools[]> {
        const toolsEntity: Tools[] = await AppDataSource.getRepository(Tools)
            .createQueryBuilder("tools")
            .addSelect("tools.id", "id")
            .addSelect("tools.title", "title")
            .addSelect("tools.description", "description")
            .addSelect("tools.link", "link")
            .addSelect("JSON_ARRAYAGG(tags.tags)", "tags")
            .groupBy("tools.id")
            .leftJoin(
                "tools_tags_tags",
                "tools_tags",
                "tools.id = tools_tags.toolsid",
            )
            .leftJoin("tags", "tags", "tools_tags.tagsid = tags.id")
            .getRawMany();

        const arrayOrderToolsByTag: Tools[] = [];

        toolsEntity.map((tool) => {
            const tagExists: string[] = [];

            for (const tag of tool.tags) {
                const tagAssertion = tag as unknown;
                if (tagAssertion === tagFilter) {
                    tagExists.push(tagAssertion);
                }
            }

            if (tagExists.length > 0) {
                return arrayOrderToolsByTag.unshift(tool);
            }

            arrayOrderToolsByTag.push(tool);
            return tool;
        });

        return arrayOrderToolsByTag;
    }

    async remove(id: number): Promise<void> {
        const toolsEntity = AppDataSource.getRepository(Tools);

        const toolsForRemove = await toolsEntity.findOne({
            where: { id },
            relations: { tags: true },
        });

        if (!toolsForRemove) return;

        await toolsEntity.remove(toolsForRemove);
    }
}

export { ToolsRepository };
