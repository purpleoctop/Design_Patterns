import {Shipping} from './shipping'
import {Fees} from './fees'
import {Discount} from './discount'
import {IshopFacade, Idiscount, Ishipping, Ifees} from './interfaces'
class ShopFacade  implements IshopFacade{
    discount : Idiscount;
    shipping : Ishipping;
    fees : Ifees

    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price : number) :number {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}





export default ShopFacade;