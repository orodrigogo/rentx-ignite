import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';
import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'src', 'tmp');

interface IUploadConfig {
  tmpFolder: string;
  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };
}

export default {
  driver: 'disk',

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
} as IUploadConfig;