import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    driver_license: string;
    avatar: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorret!", 200);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorret!", 200);
    }

    const token = sign({}, "2e247e2eb505c42b362e80ed4d05b078", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        driver_license: user.driver_license,
        avatar: user.avatar
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
