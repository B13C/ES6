const PersonService = require("./services/PersonService");
var obj = new PersonService();
console.log(obj.add(10, 20));

function* gen() {
    console.log('waiting....');
    let a = yield 'hello';
    console.log("a : " + a);
    let b = yield 'world';
    console.log("b : " + b);
    yield 'china';
    return 'ending';
}

let data = gen();

let i = 0;
while (!data.next().done) {
    console.log(data.next('send Data : ' + i++));
}

function testAwait() {
    return new Promise((resolve) => {
        setTimeout(function () {
            let data = ['hello', 'world', 'apple', 'pear'];
            console.log("testAwait");
            resolve(data);
        }, 1000);
    });
}

async function abc() {
    await testAwait().then(value => {
        console.log("abc() function : " + value);
    });
    return 'aaaaaa';
}

abc().then((value) => {
    console.log('then : ' + value);
}).catch(() => {
    console.log('catch : ')
});

console.log('Pig Pig...');
