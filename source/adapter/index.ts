import {Ijedi} from "./interface";
import {attackWithSaber} from "./interface/Ijedi";
import {Jedi} from "./jedi";
import {Soldier} from "./soldier";

class JediAdapter {
    public jedi: Ijedi;
    constructor(jedi: Ijedi) {
        this.jedi = jedi;
    }

    public attack(): attackWithSaber {
        return this.jedi.attackWithSaber() ;
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter,
};
