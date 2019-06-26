import { forclass } from './interfaces/forclass';
import { forfactory } from './interfaces/forfactory';


function droidProducer(kind) {
    if (kind === 'battle'){
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory() : forfactory {
    return new B1();
}

function pilotDroidFactory() :forfactory{
    return new Rx24();
}

class B1 implements forclass {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements forclass{
    info()  {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;