/**
 * Returns an array of object values from its properties.
 * 
 * @param object The object to get values for.
 */
export function objectValues(object: any): any[] {
  return Object.keys(object).map(k => object[k]);
};
