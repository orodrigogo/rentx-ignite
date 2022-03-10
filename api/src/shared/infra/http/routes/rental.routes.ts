import { Router } from "express";
import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { RentalByUserController } from "@modules/rentals/useCases/createRental/RentalByUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { RentalByCarController } from "@modules/rentals/useCases/createRental/RentalByCarController";


const rentalRoutes = Router();
const createRentalController = new CreateRentalController();
const rentalByUserController = new RentalByUserController();
const rentalByCarController = new RentalByCarController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalRoutes.get("/", ensureAuthenticated, rentalByUserController.handle);
rentalRoutes.get("/car/:id", ensureAuthenticated, rentalByCarController.handle);

export { rentalRoutes };
