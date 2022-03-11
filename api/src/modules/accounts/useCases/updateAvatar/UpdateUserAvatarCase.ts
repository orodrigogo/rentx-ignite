import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IStorageProvider } from '../../../../shared/providers/IStorageProvider';
import { User } from '../../infra/typeorm/entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

@injectable()
export class UpdateUserAvatarCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) { }

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);
    console.log("ARQUIVO ===>", filename);
    user.avatar = filename;


    await this.usersRepository.save(user);

    return user;
  }
}