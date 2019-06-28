export class Min {
public left: any;
public right: any;
    constructor(left: any, right: any) {
        this.left = left;
        this.right = right;
    }

    public interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}