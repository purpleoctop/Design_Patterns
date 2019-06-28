import {Discount} from "./discount";
import {Fees} from "./fees";
import {Idiscount, Ifees, Ishipping, IshopFacade } from "./interfaces";
import {Shipping} from "./shipping";

class ShopFacade  implements IshopFacade {
    public discount: Idiscount;
    public shipping: Ishipping;
    public fees: Ifees;

    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

   public calc(price: number): number {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

export default ShopFacade;
