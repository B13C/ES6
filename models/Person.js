class Person {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    add(a, b) {
        return this.a + this.b + this.c + a + b;
    }
    sub(a, b) {
        return a - b;
    }
}


module.exports = Person;