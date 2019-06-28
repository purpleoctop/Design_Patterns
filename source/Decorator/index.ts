import {CheeseDecorator} from "./cheeseDecorator";
import { Ipasta } from "./interfaces/intex";
import {Penne} from "./Penne";
import {SauceDecorator} from "./sauseDecorator";

export class Pasta implements Ipasta {
    public price: number;
    constructor() {
        this.price = 0;
    }
   public getPrice(): number {
        return this.price;
    }
}

export {
    Penne,
    SauceDecorator,
    CheeseDecorator,
};
