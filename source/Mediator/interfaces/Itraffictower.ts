import { Airplane } from "..";
import { AirPosition } from "./Iairplane";

export interface Itraffictower {
    airplanes: Airplane[];
    requestPositions(): AirPosition[];
}
