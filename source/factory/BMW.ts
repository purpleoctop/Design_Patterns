import { Ibmw, Models } from './interfaces';

export class Bmw implements Ibmw {
    public model: Models;
    public price: number;
    public maxSpeed: number;

    constructor(model:Models, price:number , maxSpeed:number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
