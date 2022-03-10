import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

interface Data {
  id: string;
  name: string;
  driver_license: string;
  avatar: string;
}

@injectable()
class SyncUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    name,
    avatar,    
    driver_license,
  }: Data): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.avatar = avatar;
    user.driver_license = driver_license;
 

    return this.usersRepository.save(user);
  }
}

export { SyncUserUseCase };
