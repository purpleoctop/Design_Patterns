import {Idiscount} from './interfaces'
export class Discount implements Idiscount {

    calc(value:number) {
        return value * 0.9;
    }
}