const get_random_number = () => new Promise((resolve, reject) => {
    const input_number = Number(Math.random() * 100);
    setTimeout(() => {
        if (input_number % 5 == 0) {
            reject(`Rejected the promise with num: ${input_number}`);
        }
        resolve(`Resolved the promise with : ${input_number}`);
    })
});

const p = get_random_number();
p.then((p) => console.log(p));
p.catch((p) => console.error())
p.finally((p) => console.log(p))
