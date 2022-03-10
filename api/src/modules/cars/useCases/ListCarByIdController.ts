import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarByIdUseCase } from "./ListCarByIdUseCase";

class ListCarByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCarByIdUseCase = container.resolve(ListCarByIdUseCase);

    const car = await listCarByIdUseCase.execute(request.params.id);

    return response.status(200).json(car);
  }
}

export { ListCarByIdController };
