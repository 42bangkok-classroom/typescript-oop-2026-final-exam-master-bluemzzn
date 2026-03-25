import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('missions')
export class ProductsController {
    constructor(private readonly productsService : ProductsService){}
    // @Get()
    // findAll(){
    //     return this.productsService.findAll();
    // }
}