import { type Request, type Response } from "express";

import { type CreateTagsUseCase } from "./CreateToolsUseCase";

class CreateToolsController {
    constructor(private readonly createTagsUseCase: CreateTagsUseCase) {}
    // aa
    // aa
    // aa
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, link, tags } = request.body;

        if (!title || !description || !link) {
            return response.status(400).json({
                message: "Todos os campos devem ser preenchidos",
            });
        }

        if (tags.length === 0) {
            return response.status(400).json({
                message: "Todos os campos devem ser preenchidos",
            });
        }

        const createdTool = await this.createTagsUseCase.execute({
            title,
            description,
            link,
            tags,
        });

        return response.status(201).json(createdTool);
    }
}

export { CreateToolsController };
