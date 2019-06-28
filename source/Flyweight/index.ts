import {Icolor} from "./interfaces";
export class Color implements Icolor {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
