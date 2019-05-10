const BtnUtil = require("./utils/BtnUtil");
function timeout(ms) {
    return new Promise((resolve, reject) => {
        let num = BtnUtil.generateNumber(1);
        if (num > 5) {
            resolve(num);
        } else {
            reject(num);
        }
    });
}

timeout(100).then((value) => {
    console.log('done : ' + value);
}).catch((value) => {
    console.log('reject : ' + value);
});


console.log('This is a main function');