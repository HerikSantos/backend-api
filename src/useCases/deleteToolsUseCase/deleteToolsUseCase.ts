import { type IToolsRepository } from "../../repository/IToolsRepository";

class DeleteToolsUseCase {
    constructor(private readonly toolsRepository: IToolsRepository) {}

    async execute(id: number): Promise<void> {
        await this.toolsRepository.remove(id);
    }
}

export { DeleteToolsUseCase };
