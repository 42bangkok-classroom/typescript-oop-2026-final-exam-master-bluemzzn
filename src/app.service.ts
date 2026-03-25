import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';

@Injectable()
export class AppService {

//    getHello(): ApiResponse<string[]> {
//      return {
//    data: [
//      "service" : "purchase-api",
//      "version" : "1.0.0"
//    ],
//    message: "Hello NestJS"} as ApiResponse<string[]>;

getHello(): string{
  return 'sdfsdf';
}
//    }
 }
