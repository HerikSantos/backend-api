import { type Tools } from "../../entities/Tools";
import { type IToolsRepository } from "../../repository/IToolsRepository";
import { transformTagsInArray } from "../../service/traformTagsInArray";

interface IRequest {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

class CreateTagsUseCase {
    constructor(private readonly tagsRepositoy: IToolsRepository) {}

    async execute({
        title,
        description,
        link,
        tags,
    }: IRequest): Promise<Tools> {
        const body: IRequest = {
            title,
            description,
            link,
            tags,
        };
        const result = await this.tagsRepositoy.create(body);

        const arrayTags = await transformTagsInArray(result, 0);
        return arrayTags;
    }
}

export { CreateTagsUseCase };
