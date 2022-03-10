import { Rental } from "@modules/rentals/infra/typeorm/entities/Rentalt";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
  car_id: string;
  start_date: string;
  end_date: string;
  total: number;
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
  ) { }

  async execute(data: IRequest): Promise<Rental> {
    const rental = await this.rentalsRepository.create(data);

    return rental;
  }
}

export { CreateRentalUseCase };
