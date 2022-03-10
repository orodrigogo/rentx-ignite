import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

@injectable()
class ListCarByIdUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute(id: string): Promise<Car> {
    const car = await this.carsRepository.findById(id);

    return car;
  }
}

export { ListCarByIdUseCase };
