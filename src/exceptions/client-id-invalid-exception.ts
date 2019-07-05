export class ClientIdInvalidException extends Error {
  /**
   * Initializes a new instance of the ClientIdInvalidException.
   * 
   * @param id The invalid client id.
   */
  constructor(id: string) {
    super(`Client Id '${id}' is invalid.`);
  }
}
