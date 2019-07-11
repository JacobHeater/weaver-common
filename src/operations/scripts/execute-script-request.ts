import { BaseSocketRequest } from '../../common/base-socket-request';

export class ExecuteScriptRequest extends BaseSocketRequest<string[]> {
  /**
   * Validates that the data for this request is valid.
   */
  isValid(): boolean {
    return Array.isArray(this.data) && this.data.length > 0;
  }

  /**
   * Run each line in the string array, or
   * run as a batch script.
   */
  runLineByLine: boolean = true;

}
