import { IStatusResult } from "../interfaces/istatus-result";
import { StatusCodes } from "../enums/status-codes";

export abstract class BaseSocketResponse<T> implements IStatusResult {
  /**
   * Initializes a new instance of the BaseSocketResponse class.
   * 
   * @param data The data for the response.
   */
  constructor(data?: T | undefined) {
    this.data = data;
  }

  status: StatusCodes = StatusCodes.Unknown;
  failureReasons: string[] = [];
  data: T | undefined;
}