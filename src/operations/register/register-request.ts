import { Client } from "../../common/client";
import { BaseSocketRequest } from "../../common/base-socket-request";

export class RegistrationRequest extends BaseSocketRequest<Client> {
  /**
   * Validates that the data for this request is valid.
   */
  isValid(): boolean {
    return !!this.data && this.data.isValid();
  }
};
