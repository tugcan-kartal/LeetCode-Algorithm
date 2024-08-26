/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let str=digits.join("");
    let nmbr=BigInt(str)+BigInt(1);
    let str2=nmbr.toString().split("");
    return str2;
};