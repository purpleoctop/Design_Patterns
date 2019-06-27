import {Jedi} from './jedi'
import {Soldier} from './soldier'
import {Ijedi} from './interface'
import {attackWithSaber} from './interface/Ijedi'

class JediAdapter {
    jedi : Ijedi
    constructor(jedi :Ijedi) {
        this.jedi = jedi;
    }

    attack() :attackWithSaber {
        return this.jedi.attackWithSaber() ;
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter
};