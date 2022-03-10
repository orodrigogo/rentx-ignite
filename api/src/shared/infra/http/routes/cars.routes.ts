import { Router } from "express";
import { ListCarsController } from '../../../../modules/cars/useCases/ListCarsController';
import { ListCarByIdController } from '../../../../modules/cars/useCases/ListCarByIdController';
import { UpdateCarController } from '../../../../modules/cars/useCases/UpdateCarController';
import { SyncPullCarsController } from '../../../../modules/cars/useCases/SyncPullCarsController';

const carsRoutes = Router();

const listCarsController = new ListCarsController();
const listCarByIdController = new ListCarByIdController();
const syncPullCarsController = new SyncPullCarsController();
const updateCarController = new UpdateCarController();

carsRoutes.get("/", listCarsController.handle);
carsRoutes.get("/:id", listCarByIdController.handle);
carsRoutes.put("/:id", updateCarController.handle);
carsRoutes.get("/sync/pull",
  syncPullCarsController.handle
);


export { carsRoutes };
