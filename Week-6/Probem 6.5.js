function findPairWithDifference(A, B) {
  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i] + B) || set.has(A[i] - B)) {
      return 1;
    }
    set.add(A[i]);
  }
  return 0;
}

let arr= [5, 20, 3, 2, 5, 80];
N=78
console.log(findPairWithDifference(arr,N))

// time complexity : o(n) as iterating the array
// space complexity: o(n) as we are using the set data structure in order to store the elements and to keep track
