/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr = [];
    let r1=0,r2=n-1;
    let c1=0,c2=n-1;
    let fill = 0;
    for(let i=0;i<n;i++)
    {
        arr[i] = []
        for(let j=0;j<n;j++){
            arr[i][j] = 0;
        }
    }

    let val=1;

    while(r1<=r2 && c1<=c2){
        for(let c=c1;c<=c2;c++)
        {
            arr[r1][c] = val;
            val++;
        }
        for(let r=r1+1;r<=r2;r++)
        {
            arr[r][c2] = val;
            val++;
        }
        if(r1<r2 && c1<c2){
            for(let c = c2-1;c>c1;c--){
                arr[r2][c] = val;
                val++;
            }
            for(let r=r2;r>r1;r--){
                arr[r][c1] = val;
                val++;
            }
        }
        r1++;
        r2--;
        c1++;
        c2--;
    }

    return arr;
};


https://leetcode.com/problems/spiral-matrix-ii/submissions/865231875/
