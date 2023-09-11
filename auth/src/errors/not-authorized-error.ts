import { CustomError } from "./custom-error";

export class NotAuthorizeError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not Authorized");

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotAuthorizeError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
 }