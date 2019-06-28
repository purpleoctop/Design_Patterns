import {Itraffictower} from "./Itraffictower";
export type AirPosition= string;
export interface Iairplane {
    position: AirPosition;
    trafficTower: Itraffictower;
    requestPositions(): AirPosition[];
}
