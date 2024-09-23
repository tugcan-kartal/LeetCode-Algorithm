/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum=(nums,target)=>{
    const numMaps={};

    for(let i=0;i<nums.length;i++){
        let component=target-nums[i];

        if(component in numMaps){
            return [numMaps[component],i]
        }

        numMaps[nums[i]]=i;
    }
}