import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/createUser/UpdateUserController";
import { SyncUserController } from "../../../../modules/accounts/useCases/createUser/SyncUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const syncUserController = new SyncUserController();


usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/sync", syncUserController.handle);
usersRoutes.put("/", ensureAuthenticated, updateUserController.handle);

export { usersRoutes };
