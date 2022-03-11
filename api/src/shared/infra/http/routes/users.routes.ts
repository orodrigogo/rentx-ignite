import { Router } from "express";
import multer from 'multer';
import uploadConfig from '../../../../config/upload';
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { SyncUserController } from "../../../../modules/accounts/useCases/createUser/SyncUserController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/createUser/UpdateUserController";
import { UserAvatarController } from "../../../../modules/accounts/useCases/updateAvatar/UserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const upload = multer(uploadConfig.multer);



const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const syncUserController = new SyncUserController();
const userAvatarController = new UserAvatarController();


usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/sync", syncUserController.handle);
usersRoutes.put("/", ensureAuthenticated, updateUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

export { usersRoutes };

