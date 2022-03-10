import { Request, Response } from "express";
import { container } from "tsyringe";
import { RentalByUserUseCase } from "./RentalByUserUseCase";

class RentalByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const rentalByUserUseCase = container.resolve(RentalByUserUseCase);

    const rentals = await rentalByUserUseCase.execute(id);

    return response.status(200).json(rentals);
  }
}

export { RentalByUserController };
