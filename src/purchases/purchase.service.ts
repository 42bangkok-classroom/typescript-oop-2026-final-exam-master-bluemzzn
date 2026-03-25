import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import { ApiResponse } from 'src/interfaces/response.interface';
import * as fs from 'fs';
import path from 'path';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

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
    } as ApiResponse<Purchase[]>;
  }

  findOne(id: number) {
    const purchases = this.findAll();

    const filePath = path.join(process.cwd(), 'data/missions.json');
    const data = fs.readFileSync(filePath, 'utf-8');

    const purchase = JSON.parse(data) as Purchase[];
    const purchaseid = purchases.find((u) => u.id === id);

    if (!purchaseid) {
      return {
        success: false,
        data: null,
        message: `Purchase with id ${id} not found`,
      } as ApiResponse<null>;
    }

    return {
      success: true,
      data: purchase,
      message: 'Fetched purchases successfully',
    } as ApiResponse<Purchase[]>;
  }

  create(dto: CreatePurchaseDto) {
    const purchase = this.findAll();
    const newId = String(purchase.length + 1);

    const newPurchase = { id: newId, ...dto };

    purchase.push(newPurchase);

    return {
      success: true,
      data: [newPurchase],
      message: 'Fetched purchases successfully',
    };
  }
}
