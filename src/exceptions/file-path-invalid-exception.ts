export class FilePathInvalidException extends Error {
  constructor(path: string) {
    super(`File path: '${path}' is invalid.`);
  }
}
