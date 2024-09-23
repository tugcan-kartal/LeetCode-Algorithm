/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newArray=s.split(" ").filter(Boolean);
    let array_length=newArray.length;

    let last_element=newArray[array_length-1].length;

    return last_element;
};