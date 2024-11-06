/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit=(prices)=>{

    let tmp1;
    let tmp2;

    let total=[];

    for(let i=0;i<prices.length;i++){
        tmp2=prices[i];
        for(let j=i;j<prices.length;j++){
            tmp1=prices[j];
            let calculate=tmp1-tmp2;
            if(calculate>=0){
                total.push(calculate);
            }
        }
    }

    return Math.max(...total);
}