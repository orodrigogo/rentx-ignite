import { inject, injectable } from "tsyringe";
import bcrypt from 'bcrypt';
import { AppError } from "@shared/errors/AppError";
import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";

import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await bcrypt.hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserCase };
