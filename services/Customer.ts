import { CustomerTypeEnum } from "../enums/CustomerTypeEnum";
import { DiscountsEnum } from "../enums/DiscountsEnum";

export class Customer {
  private _name: string;
  private _type: CustomerTypeEnum;
  private _discount: number;

  constructor(name: string, type: CustomerTypeEnum) {
    this._name = name;
    this._type = type;
    this._discount = this.calculateDiscount();
  }

  get name(): string {
    return this._name;
  }

  get type(): CustomerTypeEnum {
    return this._type;
  }

  get discount(): number {
    return this._discount;
  }

  private calculateDiscount(): number {
    switch (this._type) {
      case CustomerTypeEnum.Regular:
        return DiscountsEnum.REGULAR;
      case CustomerTypeEnum.Premium:
        return DiscountsEnum.PREMIUM;
      case CustomerTypeEnum.VIP:
        return DiscountsEnum.VIP;
      default:
        return DiscountsEnum.DEFAULT;
    }
  }
}

