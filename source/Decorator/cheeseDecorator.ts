import { Ipasta } from "./interfaces/intex";
import {PastaDecorator} from "./pastaDecorator";

export class CheeseDecorator extends PastaDecorator {
    constructor(pasta: Ipasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 3;
    }
}
