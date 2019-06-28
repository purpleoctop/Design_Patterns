import {Icolor} from "./Icolor";
export interface Icolorfactory {
    colors: {};
    create(name: string): Icolor;

}
