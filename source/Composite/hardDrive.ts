import {Equipment} from "./index";
export class HardDrive extends Equipment {
    constructor() {
        super();
        this.setName("Hard Drive");
        this.price = 250;
    }
}
