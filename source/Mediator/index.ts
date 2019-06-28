import {Airplane} from "./Airplane";
import {Itraffictower} from "./interfaces";

class TrafficTower implements Itraffictower {
public airplanes: Airplane[];

    constructor() {
        this.airplanes = [];
    }

   public requestPositions() {
        return this.airplanes.map((airplane: Airplane) => {
            return airplane.position;
        });
    }
}

export {
    TrafficTower,
    Airplane,
};
