/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)===true){
        return nums.indexOf(target);
    }else{
        nums.push(target);
        nums.sort();
        return nums.indexOf(target);
    }
};