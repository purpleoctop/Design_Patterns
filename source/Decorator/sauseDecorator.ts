import { Ipasta } from "./interfaces/intex";
import {PastaDecorator} from "./pastaDecorator";

export class SauceDecorator extends PastaDecorator {
    constructor(pasta: Ipasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 5;
    }
}
