import { ToolsRepository } from "../../repository/ToolsRepository";
import { DeleteToolsUseCase } from "./deleteToolsUseCase";

const toolsRepository = new ToolsRepository();

const deleteToolsUseCase = new DeleteToolsUseCase(toolsRepository);

export { deleteToolsUseCase };
