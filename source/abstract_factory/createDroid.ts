import {B1, Rx24} from './droid'
import {Idroid} from './interfaces/Idroid'

export function pilotDroidFactory() :Idroid {
    return new Rx24();
}
export function battleDroidFactory() : Idroid {
    return new B1();
}