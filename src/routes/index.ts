/* eslint-disable @typescript-eslint/no-misused-promises */
import Express from "express";

import { createTagsUseCase } from "../useCases/createToolsUseCase";
import { CreateToolsController } from "../useCases/createToolsUseCase/CreateToolsController";
import { deleteToolsUseCase } from "../useCases/deleteToolsUseCase";
import { DeleteToolsController } from "../useCases/deleteToolsUseCase/deleteToolsController";
import { readToolsUseCase } from "../useCases/readToolsUseCase";
import { ReadToolsController } from "../useCases/readToolsUseCase/ReadToolsController";

const route = Express.Router();

const createToolsController = new CreateToolsController(createTagsUseCase);
const readToolsController = new ReadToolsController(readToolsUseCase);
const deleteToolsController = new DeleteToolsController(deleteToolsUseCase);

route.get("/tools", async (request, response) => {
    await readToolsController.handle(request, response);
});

route.post("/tools", async (request, response) => {
    await createToolsController.handle(request, response);
});

route.delete("/tools/:id", async (request, response) => {
    await deleteToolsController.handle(request, response);
});

export { route };
