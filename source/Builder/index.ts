import {IrequestBuilder, Irequest} from './Interfaces'
import {Request} from './request'
export class RequestBuilder implements IrequestBuilder{
    request : Irequest
    constructor() {
        this.request = new Request();
    }

    forUrl(url:string) {
        this.request.url = url;
        return this;
    }

    useMethod(method :string) {
        this.request.method = method;
        return this;
    }

    payload(payload :{}) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

export default RequestBuilder;