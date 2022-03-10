import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

import { ICarsRepository } from "../repositories/ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface Data {
  id: string;
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
}

@injectable()
class UpdateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute(data: Data): Promise<Car> {
    const car = await this.carsRepository.findById(data.id);

    if (!car) {
      throw new AppError('Car not found');
    }

    car.name = data.name;
    car.brand = data.brand;
    car.about = data.about;
    car.period = data.period;
    car.price = data.price;
    car.fuel_type = data.fuel_type;
    car.thumbnail = data.thumbnail;

    return this.carsRepository.update(car);
  }
}
export { UpdateCarUseCase };
