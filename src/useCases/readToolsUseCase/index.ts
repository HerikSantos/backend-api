import { ToolsRepository } from "../../repository/ToolsRepository";
import { ReadToolsUseCase } from "./ReadToolsUseCase";

const toolsRepository = new ToolsRepository();
const readToolsUseCase = new ReadToolsUseCase(toolsRepository);

export { readToolsUseCase };
