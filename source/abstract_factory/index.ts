import {battleDroidFactory, pilotDroidFactory} from "./createDroid";
import { Idroid } from "./interfaces/Idroid";

function droidProducer(kind: string): () => Idroid {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

export default droidProducer;
