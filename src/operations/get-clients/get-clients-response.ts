import { BaseSocketResponse } from '../../common/base-socket-response';
import { Client } from '../../common/client';

export class GetClientsResponse extends BaseSocketResponse<Client[]> {
  constructor(data: Client[]) {
    super(data);
  }
};
