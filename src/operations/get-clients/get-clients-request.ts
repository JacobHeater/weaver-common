import { BaseSocketRequest } from '../../common/base-socket-request';

export class GetClientsRequest extends BaseSocketRequest<null> {
  isValid(): boolean {
    return true;
  }
};
