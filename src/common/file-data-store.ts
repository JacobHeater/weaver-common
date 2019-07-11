import { IDataStore } from '../interfaces/idata-store';
import { FilePathInvalidException } from '../exceptions/file-path-invalid-exception';
import fs from 'fs';
import { FileDoesNotExistException } from '../exceptions/file-does-not-exist-exception';
import { InMemoryDataStore } from './in-memory-data-store';

export abstract class FileDataStore extends InMemoryDataStore {
  constructor(path: string, createIfNotExists: boolean = true) {
    super();

    this.validatePath(path, createIfNotExists);

    this._path = path;
    const existingData = fs.readFileSync(path).toString();

    if (existingData) {
      this._keyValueStore = JSON.parse(existingData);
    }
  }

  private _path: string;

  save(): void {
    fs.writeFileSync(this._path, this.keyValueStoreToJson());
  }

  async saveAsync(): Promise<NodeJS.ErrnoException | null | undefined> {
    return new Promise<NodeJS.ErrnoException | null | undefined>((resolve, reject) => {
      fs.writeFile(this._path, this.keyValueStoreToJson(), err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  updatePath(path: string, createIfNotExists: boolean): void {
    this.validatePath(path, createIfNotExists);

    this._path = path;
  }

  protected validatePath(path: string, createIfNotExists: boolean): void {
    if (!(path || '').trim()) {
      throw new FilePathInvalidException(path);
    }

    if (!fs.existsSync(path)) {
      if (!createIfNotExists) {
        throw new FileDoesNotExistException(path);
      } else {
        fs.writeFileSync(path, '');
      }
    }
  }

  private keyValueStoreToJson(): string {
    return JSON.stringify(this._keyValueStore);
  }
}