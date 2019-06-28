import {Iink} from "./interfaces";
export class Ink implements Iink {
    public type: string;
    constructor(type: string) {
        this.type = type;
    }
   public get(): string {
        return this.type;
    }
}
