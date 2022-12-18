let str = 'abconndfinibdibiedvnfneifeefeefefsdgre';
let mp = new Map();

const count = 0;
for (const key of str) {
    mp.set(key, count);
}

for (const key of str) {
    let count = mp.get(key);
    mp.set(key, count + 1);
}

console.log(mp)


/* Time complexity : big o(n)
   space complexity : big o(n)
   As we are taking the map data structure in order to track the count of character
*/
