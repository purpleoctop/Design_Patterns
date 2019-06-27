import {Irequest} from './Interfaces'
export class Request implements Irequest {
    url:string;
    method:string;
    payload:object
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

