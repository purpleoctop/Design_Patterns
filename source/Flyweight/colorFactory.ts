import {Color} from "./index";
import {Icolorfactory} from "./interfaces";

class ColorFactory implements Icolorfactory {
    public colors: { [key: string]: Color};
    constructor(name: string) {
        this.colors = {};
    }
    public create(name: string): Color {
        const color = this.colors[name];
        if (color) {
            return color;
        }
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    ColorFactory,
};
