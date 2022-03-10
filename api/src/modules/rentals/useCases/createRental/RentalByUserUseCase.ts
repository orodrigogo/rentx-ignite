import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rentalt";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class RentalByUserUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("CarsRepository")
    private usersRepository: ICarsRepository
  ) {}

  async execute(user_id: string): Promise<Rental[]> {
    const rentals = await this.rentalsRepository.findByUser(user_id);
    return rentals;
  }
}

export { RentalByUserUseCase };
