import { type Request, type Response } from "express";

import { type DeleteToolsUseCase } from "./deleteToolsUseCase";

class DeleteToolsController {
    constructor(private readonly deleteToolsUseCase: DeleteToolsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        if (!id) return response.status(400).send();

        const idNumber = parseInt(id);

        await this.deleteToolsUseCase.execute(idNumber);

        return response.send();
    }
}
export { DeleteToolsController };
