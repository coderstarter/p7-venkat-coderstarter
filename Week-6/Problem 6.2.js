/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let ans = [];
    let i,k=0,l=0;
    while(k<m && l<n){
        for(i=l;i<n;i++){
            ans.push(matrix[k][i]);
        }
        k++;
        for(i=k;i<m;i++)
        {
            ans.push(matrix[i][n-1]);
        }
        n--;
        if(k<m){
            for(i=n-1;i>=0;i--){
                ans.push(matrix[m-1][i]);
            }
            m--;
        }
        if(l<n){
            for(i=m-1;i>=k;i--){
                ans.push(matrix[i][l]);
            }
            l++;
        }
    }
    return ans;
};

// time complexity: o(n^2) as we are iterating the matrix
// space complexity: o(n) for storing the ans
