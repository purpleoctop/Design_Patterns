
import {Printer} from "./index";
import { Ink } from "./ink";

export class HPprinter extends Printer {
    public ink: Ink;
    constructor(ink: Ink) {
        super(ink);
    }

    public print(): string {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}
