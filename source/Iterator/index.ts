class Iterator {
public index: number;
public elements: any;
    constructor(el: any) {
        this.index = 0;
        this.elements = el;
    }

   public next() {
        return this.elements[this.index++];
    }

    public hasNext() {
        return this.index < this.elements.length;
    }
}

export default Iterator;
