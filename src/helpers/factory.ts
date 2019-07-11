export class Factory {
  /**
   * Creates a new instance of type T, and sets
   * the new instance's property values.
   * 
   * @param type The type to instantiate, or initialize from. Must be an empty consturctor, or an instance of T.
   * @param source The source object to intialize the new instance properties from.
   */
  static from<T>(type: (new () => T) | T, source: T) {
    let input: T;

    if (typeof type === 'function') {
      input = new (type as (new () => T))();
    } else {
      input = type as T;
    }

    const out = Object.assign<T, T>(input, source);

    return out;
  }  
};
