import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { eachDayOfInterval, format } from "date-fns";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

interface IResponse {
  id: string;
  unavailable_dates: string[];
}

@injectable()
class RentalByCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository
  ) { }

  async execute({
    id
  }: IRequest): Promise<IResponse> {
    const car = await this.carsRepository.findById(id);

    if (!car) {
      throw new AppError(`Car ${id} not found`, 404);
    }

    const rentals = await this.rentalsRepository.findOpenRentalByCar(id);

    let unavailable_dates = [];

    if (rentals.length > 0) {
      rentals.forEach(rental => {
        const formattedDates =
          eachDayOfInterval({
            start: rental.start_date,
            end: rental.end_date
          })
            .map(date => format(date, 'yyyy-MM-dd'));

        unavailable_dates = [...unavailable_dates, ...formattedDates];
      });
    }


    return {
      id,
      unavailable_dates
    }
  }
}

export { RentalByCarUseCase };