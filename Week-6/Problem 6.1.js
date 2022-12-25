/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxmium_till_current = nums[0],maxmium_till_last = nums[0];
    for(let i=1;i<nums.length;i++){
    // to find the max till now and update it 
        maxmium_till_current = Math.max(maxmium_till_current+nums[i],nums[i]);
    // update the max at last
        maxmium_till_last = Math.max(maxmium_till_last,maxmium_till_current);
    }
    return maxmium_till_last;
};

https://leetcode.com/problems/maximum-subarray/submissions/865117463/
