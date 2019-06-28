import {Iink} from "./ink";
export interface Iprinter {
    ink: Iink;
    print?(): string;
}
