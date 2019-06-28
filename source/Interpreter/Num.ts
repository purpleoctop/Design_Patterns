import {Inum} from "./interfaces";
export class Num implements Inum{
public val: any;
    constructor(val: any) {
        this.val = val;
    }

    public interpret() {
        return this.val;
    }
}
