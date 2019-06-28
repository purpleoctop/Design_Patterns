import {Printer} from "./index";
import { Ink } from "./ink";

export class EpsonPrinter extends Printer {
    public ink: Ink;
    constructor(ink: Ink) {
        super(ink);
    }

    public print(): string {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}
