import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarsUseCase } from "./ListCarsUseCase";

class ListCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCarsUseCase = container.resolve(ListCarsUseCase);

    const cars = await listCarsUseCase.execute();

    return response.status(200).json(cars);
  }
}

export { ListCarsController };
