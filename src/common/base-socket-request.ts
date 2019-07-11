import { IValidate } from '../interfaces/ivalidate';
import { ClientIdInvalidException } from '../exceptions/client-id-invalid-exception';
import { Factory } from '../helpers/factory';

export abstract class BaseSocketRequest<T> implements IValidate {
  /**
   * Initializes a new instance of the BaseSocketRequest class.
   * 
   * @param data The data for the request.
   */
  constructor(clientId: string, data?: T | undefined) {
    if (!this.isClientIdValid(clientId)) {
      throw new ClientIdInvalidException(clientId);
    }

    this.clientId = clientId;
    this.data = data;
  }
  
  data: T | undefined;
  clientId: string = '';
  abstract isValid(): boolean;
  
  /**
   * Validates that the given identifier is valid.
   * 
   * @param id The id to validate.
   */
  protected isClientIdValid(id: string): boolean {
    return !!(id || '').trim();
  }
};
