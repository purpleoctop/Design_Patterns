import {B1} from "./droidB1";
import {Rx24} from "./droidRx24";
import {Idroid} from "./interfaces/Idroid";

export function pilotDroidFactory(): Idroid {
    return new Rx24();
}
export function battleDroidFactory(): Idroid {
    return new B1();
}
