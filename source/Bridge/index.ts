import {AcrylicInk} from "./acrylicInk";
import {AlcoholInk} from "./alcoholicInk";
import {EpsonPrinter} from "./epronPrinter";
import {HPprinter} from "./hpPrinter";
import { Ink } from "./ink";
import {Iprinter} from "./interfaces";

export class Printer implements Iprinter {
   public ink: Ink;
    constructor(ink: Ink) {
        this.ink = ink;
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk,
};
