import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';
import { ApiResponse } from 'src/interfaces/response.interface';
import { Products } from './product.interface';

@Injectable()
export class ProductsService {
  findAll(): ApiResponse<Products[]> {
    const filePath = path.join(process.cwd(), 'data/products.json');
    const data = fs.readFileSync(filePath, 'utf-8');

    const product = JSON.parse(data) as Products[];

    return {
      success: true,
      data: product,
      message: 'Fetched products successfully',
    };
  }
}
