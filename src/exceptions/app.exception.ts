/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from '@nestjs/common';

export class AppException extends HttpException {
  constructor() {
    super('App', HttpStatus.I_AM_A_TEAPOT);
  }
}
