const fib = (n) => {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}


const iterable = {
    [Symbol.iterator](range) {
        let n = 0;
        return {
            next: () => {
                if (n < range) {
                    let val = fib(n++);
                    return { value: val, done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        }
    }
};

const iter = iterable[Symbol.iterator](10);
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
