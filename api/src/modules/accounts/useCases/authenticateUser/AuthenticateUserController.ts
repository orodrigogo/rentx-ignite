import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const data = await authenticateUserUseCase.execute({ email, password });

    return response.json(data);
  }
}

export { AuthenticateUserController };
