import {Iperson} from './interfaces'

class Person implements Iperson{
    Person :{}
    instance:{}
    constructor() {
        if (typeof Person.instance === 'object') {
            return this.instance;
        }
        this.instance = this;
        return this;
    }
}

export default Person;