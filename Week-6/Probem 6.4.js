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
