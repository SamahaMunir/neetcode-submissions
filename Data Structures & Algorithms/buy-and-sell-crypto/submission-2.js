class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l=0,r=1,maxp=0;

        while(r < prices.length)
        {

            if(prices[l] < prices[r]){

             const profit= prices[r] - prices[l];
              
             maxp= Math.max(maxp,profit);
            }else{
                l=r;
            }
            r++;
        }
      return maxp;
    }
}
