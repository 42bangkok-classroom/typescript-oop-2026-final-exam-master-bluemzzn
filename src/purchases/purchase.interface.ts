export interface Purchase {
  id: 1;
  customerName: string;
  purchaseDate: string;
  items: [
    {
      productId: number;
      quantity: number;
      price: number;
    },
  ];
  totalPrice: number;
}
