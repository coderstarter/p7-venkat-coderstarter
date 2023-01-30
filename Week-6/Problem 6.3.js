/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let lo = 0,hi=nums.length-1,mid=0;
    while(mid<=hi)
    {
        switch(nums[mid])
        {
            case 0:
                let tmp = nums[lo];
                nums[lo] = nums[mid];
                nums[mid] = tmp;
                lo++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                let tmmp = nums[mid];
                nums[mid] = nums[hi];
                nums[hi] = tmmp;
                hi--;
                break;
        }
    }
};

// https://leetcode.com/problems/sort-colors/submissions/865342293/
// space complexity: o(1)
// time complexity: o(n) as single time iterating the array.
