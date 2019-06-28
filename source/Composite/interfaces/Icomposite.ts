import { Equipment } from "..";

export interface Icomposite {
    equipments: Equipment[];
    add(equipment: Equipment): void;
    getPrice(): number;

}
