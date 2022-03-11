export interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}