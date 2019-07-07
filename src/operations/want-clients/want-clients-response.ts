import { BaseSocketResponse } from '../../common/base-socket-response';
import { Client } from '../../common/client';

export class WantClientsResponse extends BaseSocketResponse<Client[]> {
  constructor(data: Client[]) {
    super(data);
  }
};
