function compareNumbers(a, b) {
  return a - b;
}
function solve(arr,N) {
    
    console.log(arr)
    var mp = new Map();
    const count = 0;
    for (const key of arr) {
        mp.set(key, count);
    }
    
    for(let i=0;i<arr.length;i++){
        if(mp.has(Math.abs(N-arr[i]))){
            return true;
        }
        let count = mp.get(arr[i]);
        mp.set(arr[i], count + 1);
    }
    return false;
}

let arr= [5, 20, 3, 2, 5, 80];
arr.sort(compareNumbers);
N=78
console.log(solve(arr,N))
