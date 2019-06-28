export interface IshopFacade {
    discount: {};
    shipping: {};
    fees: {};
    calc(value ?: number): number;
}
