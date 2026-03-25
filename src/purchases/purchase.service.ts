import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import { ApiResponse } from 'src/interfaces/response.interface';
import * as fs from 'fs';
import path from 'path';

@Injectable()
export class PurchaseService {
  findAll(): ApiResponse<Purchase[]> {
    const filePath = path.join(process.cwd(), 'data/products.json');
    const data = fs.readFileSync(filePath, 'utf-8');

    const purchase = JSON.parse(data) as Purchase[];

    return {
      success: true,
      data: purchase,
      message: 'Fetched purchases successfully',
    };
  }
}
