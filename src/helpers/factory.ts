export class Factory {
  public static from<T>(type: (new () => T), source: T) {
    const out = Object.assign<T, T>(new type(), source);

    return out;
  }  
};
