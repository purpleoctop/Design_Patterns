import {Idriver} from "./interfaces";
export class Driver implements Idriver {
    public age: number;
    constructor(age: number) {
        this.age = age;
    }
}
