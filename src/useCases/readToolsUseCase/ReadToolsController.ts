import { type Request, type Response } from "express";

import { type ReadToolsUseCase } from "./ReadToolsUseCase";

class ReadToolsController {
    constructor(private readonly readToolsUseCase: ReadToolsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { tag } = request.query;

        if (typeof tag !== "string") {
            const tools = await this.readToolsUseCase.execute("");
            return response.json(tools);
        }

        const tools = await this.readToolsUseCase.execute(tag);
        return response.json(tools);
    }
}

export { ReadToolsController };
