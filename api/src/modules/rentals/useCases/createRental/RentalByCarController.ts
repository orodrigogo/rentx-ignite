import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RentalByCarUseCase } from './RentalByCarUseCase';

class RentalByCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const rentsByCarUseCase = container.resolve(RentalByCarUseCase)

    const rents = await rentsByCarUseCase.execute({ id });

    return response.status(200).json(rents);
  }
}

export { RentalByCarController };