import { ToolsRepository } from "../../repository/ToolsRepository";
import { CreateTagsUseCase } from "./CreateToolsUseCase";

const tagsRepository = new ToolsRepository();
const createTagsUseCase = new CreateTagsUseCase(tagsRepository);

export { createTagsUseCase };
