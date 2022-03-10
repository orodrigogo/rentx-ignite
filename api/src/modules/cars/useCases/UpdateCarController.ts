import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

class UpdateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createUserUseCase = container.resolve(UpdateCarUseCase);
    const user = await createUserUseCase.execute(data);

    return response.status(201).json(user);
  }
}

export { UpdateCarController };
