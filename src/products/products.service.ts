import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import path from 'path'
import { ApiResponse } from 'src/interfaces/response.interface';

@Injectable()
export class ProductsService {

    private readFile(): any[] {
        const filePath = path.join(process.cwd(), 'data/products.json');
    
        const raw = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(raw);
      }

    // findAll() : ApiResponse<success : boolean, data : T, message : string>{
    //     this.readFile();
    //     return {} as ApiResponse<T>;
    // }
}