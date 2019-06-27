import {Ifees} from './interfaces'
export class Fees implements Ifees {

    calc(value :number) {
        return value * 1.05;
    }
}