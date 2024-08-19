/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const newList=[];

    for(let i=0;i<nums.length;i++){
        if(newList.indexOf(nums[i])===-1){
            newList.push(nums[i]);
        }
    }

    for(let i=0;i<newList.length;i++){
        nums[i]=newList[i];
    }

    return newList.length;

};