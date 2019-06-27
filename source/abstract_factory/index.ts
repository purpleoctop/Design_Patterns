import { info } from './interfaces/info';
import { factory, droid } from './interfaces/droid';


function droidProducer(kind) {
    if (kind === 'battle'){
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory() : factory {
    return new B1();
}

function pilotDroidFactory() :factory{
    return new Rx24();
}

class B1 implements info {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements info{
    info()  {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;