import { type Tools } from "../../entities/Tools";
import { type IToolsRepository } from "../../repository/IToolsRepository";

class ReadToolsUseCase {
    constructor(private readonly toolsRepository: IToolsRepository) {}

    async execute(tagFilter: string): Promise<Tools[]> {
        const result = await this.toolsRepository.list(tagFilter);

        return result;
    }
}

export { ReadToolsUseCase };
