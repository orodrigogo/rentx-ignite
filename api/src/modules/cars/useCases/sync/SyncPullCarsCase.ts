import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface ResponseData {
  created: Car[],
  updated: Car[],
  deleted: [],
}

@injectable()
class SyncPullCarsCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute(lastPulledVersion: number): Promise<ResponseData> {
    const updated = await this.carsRepository.listByUpdated(lastPulledVersion);
    const created = await this.carsRepository.listByCreated(lastPulledVersion);

    return {
      created,
      updated,
      deleted: [],
    }
  }
}

export { SyncPullCarsCase };
