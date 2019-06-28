import { TrafficTower } from ".";
import { Itraffictower } from "./interfaces";
import {AirPosition, Iairplane} from "./interfaces/Iairplane";

export class Airplane implements Iairplane {
public position: AirPosition;
public trafficTower: Itraffictower;

    constructor(position: AirPosition, trafficTower: Itraffictower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    public requestPositions() {
        return this.trafficTower.requestPositions();
    }
}
