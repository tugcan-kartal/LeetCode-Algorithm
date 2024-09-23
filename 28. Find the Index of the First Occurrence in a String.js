/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.includes(needle)===false){
        return -1;
    }else{
        return haystack.indexOf(needle);
    }
};