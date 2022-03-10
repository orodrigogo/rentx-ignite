import { Request, Response } from "express";
import { container } from "tsyringe";
import { SyncUserUseCase } from "./SyncUserUseCase";

class SyncUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    //TODO: Será que realmente é necessário esse Controller? Rola usar o Controller existente de update?
    const { created, updated } = request.body;

    const userChange = created.length > 0 ? created : updated;

    const { user_id, name, driver_license, avatar } = userChange[0];

    console.log("PUSH DO USUÁRIO")
    console.log(userChange[0]);

    const syncUserUseCase = container.resolve(SyncUserUseCase);

    const user = await syncUserUseCase.execute({
      id: user_id,
      name: name,
      driver_license: driver_license,
      avatar: avatar
    });

    return response.status(201).json(user);
  }
}

export { SyncUserController };
