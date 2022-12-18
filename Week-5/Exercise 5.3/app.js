let arr = [1, 2, 42, 4, 5, 3, 52, 63, 100];
let org_length = arr.length;
let returned_length = check_dups(arr);

if (returned_length) {
    console.log('Given array does not the duplicates in it');
}
else {
    console.log('Duplicates are present')
}

function check_dups(arr) {
    const checker = new Set();
    for (let i = 0; i < arr.length; i++) {
        checker.add(arr[i]);
    }
    return checker.size == arr.length;
}
