import { IDataStore } from '../interfaces/idata-store';

export abstract class InMemoryDataStore implements IDataStore {
  protected _keyValueStore: { [key: string]: any } = {};

  /**
   * Gets the value for the given key, or
   * returns the default value, if the entry
   * doesn't exist.
   * 
   * @param key The key of the entry.
   * @param defaultValue The default value, should the entry not exist.
   */
  get<T>(key: string, defaultValue?: T | undefined): T | undefined {
    return this._keyValueStore[key] || defaultValue;
  }  
  
  /**
   * Sets the value for the given key.
   * 
   * @param key The key of the entry.
   * @param value The value of the entry.
   */
  set<T>(key: string, value: T): void {
    this._keyValueStore[key] = value;
  }
};
