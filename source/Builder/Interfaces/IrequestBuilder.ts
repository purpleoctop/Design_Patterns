export interface IrequestBuilder {
    forUrl(url: string): object;

    useMethod(method: string): object;

    payload(payload: string): object;

    build(): object;

}
