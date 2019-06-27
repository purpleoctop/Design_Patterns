import {Ijedi} from './interface'

export class Jedi implements Ijedi {
    level:number
    constructor(level :number) {
        this.level = level;
    }

    attackWithSaber() {
        return this.level * 100;
    }
}