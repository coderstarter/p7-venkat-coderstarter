// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function solve(arr){
    const st = [];
    const ans = [];
    let n = arr.length;
    for(let i=n-1;i>=0;i--){
        if(st.length==0){
            ans.push(-1);
        }
        else if(st.length>0 && st[st.length-1]>arr[i]){
            ans.push(st[st.length-1]);
        }
        else if(st.length>0 && st[st.length-1]<=arr[i]){
            while(st.length>0 && st[st.length-1]<=arr[i]){
                st.pop();
            }
            if(st.length==0){
                ans.push(-1);
            }
            else
            {
                ans.push(st[st.length-1]);
            }
        }
        st.push(arr[i]);
    }
    ans.reverse();
    return ans;
}

console.log(solve([1 ,3 ,2 ,4]));
