import { BaseSocketRequest } from "../../common/base-socket-request";
import { Client } from "../../common/client";

export class LogoutRequest extends BaseSocketRequest<Client> {
  /**
   * Validates that the data for this request is valid.
   */
  isValid(): boolean {
    return !!this.data && this.data.isValid();
  }
};
