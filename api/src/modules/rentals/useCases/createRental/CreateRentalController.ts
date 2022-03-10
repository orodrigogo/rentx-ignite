import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

class CreateRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { car_id, start_date, end_date, total } = request.body;
    const { id } = request.user;

    const createRentalUseCase = container.resolve(CreateRentalUseCase);

    const rental = await createRentalUseCase.execute({
      user_id: id,
      car_id,
      start_date,
      end_date,
      total
    });

    return response.status(201).json(rental);
  }
}

export { CreateRentalController };
