import {Isoldier} from './interface/Isoldier'
export class Soldier implements Isoldier {
    level : number
    constructor(level: number) {
        this.level = level;
    }

    attack() {
        return this.level * 1;
    }
}
