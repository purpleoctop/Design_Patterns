import {Pasta} from "./index";
import {Ipasta} from "./interfaces/intex";

export class PastaDecorator extends Pasta {
    public pasta: Ipasta;
    constructor(pasta: Ipasta) {
        super();
        this.pasta = pasta;
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}
