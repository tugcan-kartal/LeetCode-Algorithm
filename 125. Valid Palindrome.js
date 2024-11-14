/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Küçük harfe çevir ve yalnızca alfanümerik karakterleri al
    let tmp1 = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // tmp1'in tersini al
    let tmp2 = tmp1.split("").reverse().join("");

    // tmp1 ve tmp2'yi karşılaştır
    return tmp1 === tmp2;
};
