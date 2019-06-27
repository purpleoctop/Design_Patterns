import { Isheep } from './interfaces'

class Sheep implements Isheep{
name:string
weight:number
    constructor(name:string, weight:number) {
        this.name = name;
        this.weight = weight;
    }

    clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;