import {Car} from "./car";
import {Driver} from "./driver";
import {Icarproxy} from "./interfaces";
class CarProxy implements Icarproxy {
    public driver: Driver;
    constructor(driver: Driver) {
        this.driver = driver;
    }
    public drive() {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

export {
    Car,
    CarProxy,
    Driver,
};
