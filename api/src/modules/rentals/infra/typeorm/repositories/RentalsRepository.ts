import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { getRepository, Repository } from "typeorm";
import { Rental } from "../entities/Rentalt";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental[]> {
    const openByCar = await this.repository.find({ car_id });
    return openByCar;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental[]> {
    const openByUser = await this.repository.find({ user_id });
    return openByUser;
  }

  async findByUser(user_id: string): Promise<Rental[]> {
    const rentals = await this.repository.find({
      where: { user_id },
      relations: ['car']
    });
    return rentals;
  }

  async create(data: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create(data);

    await this.repository.save(rental);

    return rental;
  }
}

export { RentalsRepository };
