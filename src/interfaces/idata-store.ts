export interface IDataStore {
  get<T>(key: string, defaultValue?: T): T | undefined;
  set<T>(key: string, value: T): void;
};
