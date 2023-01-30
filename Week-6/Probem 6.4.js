var maxProfit = function(prices) {
    let price = prices[0];
    let maxprof = 0;
    let n = prices.length;
    for(let i=1;i<n;i++){
        let cur_cost = prices[i] - price;
        maxprof = Math.max(maxprof,cur_cost);
        price = Math.min(price,prices[i]);
    }
    return maxprof;
};


// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// time complexity: o(n) as we are iterating the array
// space comp: o(1) there is no data structure used to store the data
