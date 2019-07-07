import { BaseSocketRequest } from '../../common/base-socket-request';

export class WantClientsRequest extends BaseSocketRequest<null> {
  public isValid(): boolean {
    return true;
  }
};
