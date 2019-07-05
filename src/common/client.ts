import { IValidate } from "../interfaces/ivalidate";

export class Client implements IValidate {
  /**
   * Initializes a new instance of the Client
   * class.
   * 
   * @param id The identifier of the client.
   */
  constructor(id?: string) {
    this.id = id || '';
  }

  public id: string = '';
  public computerName: string = '';
  public userPrincipalName: string = '';

  /**
   * Returns a boolean indicating if the
   * client is valid.
   */
  public isValid(): boolean {
    return !!(this.id || '').trim() && !!(this.computerName || '').trim();
  }
}
