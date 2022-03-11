import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { DiskStorageProvider } from "../../shared/providers/DiskStorageProvider";
import { IStorageProvider } from "../../shared/providers/IStorageProvider";



container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
);

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  DiskStorageProvider
);