import {Isum} from "./interfaces";
import {Num} from "./Num";
import {Min} from "./Min";

class Sum implements Isum {
public left: any;
public right: any;
    constructor(left: number, right: number) {
        this.left = left;
        this.right = right;
    }

    public interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}



export {
    Num,
    Min,
    Sum
};