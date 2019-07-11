import { BaseSocketRequest } from '../../common/base-socket-request';

export class GetClientByIdRequest extends BaseSocketRequest<string> {
  isValid(): boolean {
    return !!(this.data || '').trim();
  }
};
