import { Customer } from "./Customer";

export class Order {
  private customer: Customer;
  private items: { item: string; price: number }[] = [];
  private totalPrice: number = 0;
  private discountedPrice: number = 0;

  constructor(customer: Customer) {
    this.customer = customer;
  }

  addItem(item: string, price: number): void {
    this.items.push({ item, price });
    this.calculateTotal();
  }

  private calculateTotal(): void {
    this.totalPrice = this.items.reduce((sum, { price }) => sum + price, 0);
    this.applyDiscount();
  }

  private applyDiscount(): void {
    this.discountedPrice = this.totalPrice * (1 - this.customer.discount);
  }

  printOrder(): void {
    console.log(`Customer: ${this.customer.name}`);
    console.log(`Items: ${this.items.map(({ item }) => item).join(", ")}`);
    console.log(`Total Price: ${this.totalPrice.toFixed(2)}`);
    console.log(`Discounted Price: ${this.discountedPrice.toFixed(2)}`);
  }
}
