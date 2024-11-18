/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const tmp=[];
    for(let num of nums){
        let index=tmp.indexOf(num);
        if(index===-1){
            tmp.push(num)
        }else{
            tmp.splice(index,1)
        }
    }

    return tmp[0];
};