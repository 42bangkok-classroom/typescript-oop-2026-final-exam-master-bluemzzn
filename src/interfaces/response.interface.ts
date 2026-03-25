// ใช้เป็น response มาตรฐานทุก endpoint
export interface ApiResponse<T> {
  push(newPurchase: {
    customerName: string;
    purchaseDate: string;
    items: [{ productId: number; quantity: number }];
    id: string;
  }): unknown;
  length: number;
  find(arg0: (u: any) => boolean): unknown;
  success: boolean;
  data: T | null;
  message: string;
}
export type Data = { service: string; version: string };
