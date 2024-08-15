/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
    const letters=[];
    const rule={
        ")":"(",
        "]":"[",
        "}":"{"
    }

    for(let char of s){
        if(char==="("){
            letters.push(char);
        }else if(char==="["){
            letters.push(char);
        }else if(char==="{"){
            letters.push(char)
        }else{
            if(letters.pop()!==rule[char]) return false;
        }
    }

    return true;
};