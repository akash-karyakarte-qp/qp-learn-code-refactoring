import { Customer } from "./Customer";

export class Order {
  private _customer: Customer;
  private _items: { item: string; price: number }[] = [];
  private _totalPrice: number = 0;
  private _discountedPrice: number = 0;

  constructor(customer: Customer) {
    this._customer = customer;
  }

  get customer(): Customer {
    return this._customer;
  }

  get items(): { item: string; price: number }[] {
    return this._items;
  }

  addItem(item: string, price: number): void {
    this._items.push({ item, price });
    this.calculateTotal();
  }

  private calculateTotal(): void {
    this._totalPrice = this._items.reduce((sum, { price }) => sum + price, 0);
    this.applyDiscount();
  }

  private applyDiscount(): void {
    this._discountedPrice = this._totalPrice * (1 - this.customer.discount);
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  get discountedPrice(): number {
    return this._discountedPrice;
  }

  printOrder(): void {
    console.log(`Customer: ${this.customer.name}`);
    console.log(`Items: ${this.items.map(({ item }) => item).join(", ")}`);
    console.log(`Total Price: ${this.totalPrice.toFixed(2)}`);
    console.log(`Discounted Price: ${this.discountedPrice.toFixed(2)}`);
  }
}

