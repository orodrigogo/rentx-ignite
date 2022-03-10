import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { rentalRoutes } from "./rental.routes";
import { carsRoutes } from "./cars.routes";

const router = Router();

router.use("/users", usersRoutes);

router.use(authenticateRoutes);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);

export { router };
