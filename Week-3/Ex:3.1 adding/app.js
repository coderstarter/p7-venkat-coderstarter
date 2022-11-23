const prompt = require("prompt-sync")();
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        console.log('fn called with ' + key);
        console.log(cache);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        console.log(cache);
        return cache.get(key);
    }
}

function add(n1, n2) {
    if (n1 == 0 || n2 == 0) {
        return n1 == 0 && n2 != 0 ? n2 : n1;
    }
    return n1 + n2;
}


function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}
const fibm = memoize(add);

var n = Number(prompt())
while (n > 0) {
    var a = Number(prompt())
    var b = Number(prompt())
    time(() => fibm(a, b));
    n--;
}
