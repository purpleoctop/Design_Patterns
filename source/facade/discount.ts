import {Idiscount} from "./interfaces";
export class Discount implements Idiscount {

    public calc(value: number) {
        return value * 0.9;
    }
}
