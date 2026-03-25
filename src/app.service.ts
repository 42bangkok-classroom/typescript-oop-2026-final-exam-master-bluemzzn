import { Injectable } from '@nestjs/common';
import { ApiResponse, Data } from './interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(): ApiResponse<Data> {
    return {
      data: {
        service: 'purchase-api',
        version: '1.0.0',
      },
      message: 'Hello NestJS',
    } as ApiResponse<Data>;
  }
}
