/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let final=[];
    let carry=0;

    let i=a.length-1;
    let j=b.length-1;

    while(i>=0 || j>=0 || carry){
        let basamakA;
        if(i>=0){
            basamakA=parseInt(a[i]);
        }else{
            basamakA=0;
        }

        let basamakB;
        if(j>=0){
            basamakB=parseInt(b[j]);
        }else{
            basamakB=0;
        }

        let total=basamakA+basamakB+carry;

        final.push((total%2).toString());
        carry=Math.floor(total/2);

        i--;
        j--;
    }

    return final.reverse().join("");
};