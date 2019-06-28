import {Isoldier} from "./interface/Isoldier";
export class Soldier implements Isoldier {
    public level: number;
    constructor(level: number) {
        this.level = level;
    }

    public attack() {
        return this.level * 1;
    }
}
