import {Irequest, IrequestBuilder} from "./Interfaces";
import {Request} from "./request";
export class RequestBuilder implements IrequestBuilder {
    public request: Irequest;
    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    public payload(payload: {}) {
        this.request.payload = payload;
        return this;
    }

    public build() {
        return this.request;
    }

}

export default RequestBuilder;
