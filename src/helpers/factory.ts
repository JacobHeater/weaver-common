export class Factory {
  /**
   * Creates a new instance of type T, and sets
   * the new instance's property values.
   * 
   * @param type The type to instantiate. Must be implement an empty consturctor.
   * @param source The source object to intialize the new instance properties from.
   */
  public static from<T>(type: (new () => T), source: T) {
    const out = Object.assign<T, T>(new type(), source);

    return out;
  }  
};
