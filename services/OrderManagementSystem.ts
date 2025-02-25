import { CustomerTypeEnum } from "../enums/CustomerTypeEnum";
import { Customer } from "./Customer";
import { Order } from "./Order";

export class OrderManagementSystem {
  static main(): void {
    const customer = new Customer("John Doe", CustomerTypeEnum.VIP);
    const order = new Order(customer);

    order.addItem("Laptop", 1000);
    order.addItem("Mouse", 50);
    order.addItem("Keyboard", 80);

    order.printOrder();

    OrderManagementSystem.generateInvoice(order);
  }

  private static generateInvoice(order: Order): void {
    console.log("Generating Invoice...");
    console.log(`Customer: ${order.customer.name()}`);
    console.log(`Total: $${order.totalPrice}`);
    console.log(`Discounted Total: $${order.discountedPrice}`);
    console.log(`Items: ${order.items.map(({ item }) => item).join(", ")}`);
    console.log("Thank you for shopping with us!");
  }
}

