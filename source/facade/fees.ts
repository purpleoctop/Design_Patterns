import {Ifees} from "./interfaces";
export class Fees implements Ifees {

    public calc(value: number) {
        return value * 1.05;
    }
}
