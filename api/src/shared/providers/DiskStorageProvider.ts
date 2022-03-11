import fs from 'fs';
import path from 'path';
import uploadConfig from '../../config/upload';
import { IStorageProvider } from './IStorageProvider';


export class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    console.log("DIRETORIO", uploadConfig.tmpFolder);

    // rename move arquivo.
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file),
    );


    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      // se não encontrou o arquivo vai dar erro e para por aqui.
      return;
    }

    // se encontrou o arquivo, vamos remover.
    await fs.promises.unlink(filePath);
  }
}
