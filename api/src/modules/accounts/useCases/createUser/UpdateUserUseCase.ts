import { inject, injectable } from "tsyringe";
import bcrypt from 'bcrypt';
import { AppError } from "@shared/errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

interface Data {
  id: string;
  name: string;
  password: string;
  old_password?: string;
  driver_license: string;
  avatar: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    name,
    avatar,
    password,
    old_password,
    driver_license,
  }: Data): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.avatar = avatar;
    user.driver_license = driver_license;

    if (password && !old_password) {
      throw new AppError(
        'You need to inform  the old password to set a new password.',
      );
    }

    if (password && old_password) {
      const checkOldPassword = await bcrypt.compare(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      user.password = await bcrypt.hash(password, 8);
    }

    return this.usersRepository.save(user);
  }
}

export { UpdateUserUseCase };
