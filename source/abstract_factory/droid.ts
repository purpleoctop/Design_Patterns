import{Idroid} from './interfaces/Idroid'

export class B1 implements Idroid {
    info() {
        return "B1, Battle Droid";
    }
}

export class Rx24 implements Idroid{
    info()  {
        return "Rx24, Pilot Droid";
    }
}
