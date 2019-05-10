let Person = require("../models/Person");
class PersonService {
    constructor(){
        this.p = new Person(1, 2, 4);
    }
    add(a, b) {
        return this.p.add(a, b);
    }
    sub() {
        return this.p.sub();
    }
}

module.exports = PersonService;