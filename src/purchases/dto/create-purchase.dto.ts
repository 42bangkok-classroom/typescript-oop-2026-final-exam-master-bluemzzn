import { IsNotEmpty } from 'class-validator';

export class CreatePurchaseDto {
  customerName: string;
  purchaseDate: string;

  @IsNotEmpty()
  items: [{ productId: number; quantity: number }];
}
