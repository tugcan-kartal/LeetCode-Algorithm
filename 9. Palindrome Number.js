/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x)=> {
    const str=x.toString();
    const reversedStr=x.toString().split("").reverse().join("");

    return str===reversedStr;
};