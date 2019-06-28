import { Equipment } from ".";
import {Icomposite} from "./interfaces";

// --- composite ---
export class Composite extends Equipment implements Icomposite {
public equipments: Equipment[];
    constructor() {
        super();
        this.equipments = [];
    }

    public add(equipment: Equipment) {
        this.equipments.push(equipment);
    }

    public getPrice() {
        return this.equipments.map((equipment) => {
            return equipment.getPrice();
        }).reduce((a, b) => {
            return a + b;
        });
    }
}
