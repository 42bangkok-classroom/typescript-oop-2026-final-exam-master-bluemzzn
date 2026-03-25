import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.purchaseService.findOne(id);
  }

  // @Post()
  // create(@Body(ValidationPipe) dto : CreatePurchaseDto){
  //   return this.purchaseService.create(dto);
  // }
}
