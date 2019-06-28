import {Ijedi} from "./interface";

export class Jedi implements Ijedi {
    public level: number;
    constructor(level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}
