import {Irequest} from "./Interfaces";
export class Request implements Irequest {
    public url: string;
    public method: string;
    public payload: object;
    constructor() {
        this.url = "";
        this.method = "";
        this.payload = {};
    }
}
