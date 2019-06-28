// Equipment
import {Cabinet} from "./cabinet";
import {FloppyDisk} from "./floppydisk";
import {HardDrive} from "./hardDrive";
import {Iequipment} from "./interfaces";
import {Memory} from "./memory";

export class Equipment implements Iequipment {
public price: number;
public name: string;
    public getPrice() {
        return this.price || 0;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}

export {
    Cabinet,
    FloppyDisk,
    HardDrive,
    Memory,
};
