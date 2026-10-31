class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         let countN = {};

         for(let i=0; i < nums.length; i++){

            countN[nums[i]] = (countN[nums[i]] || 0) + 1;

         }
         for( const c in countN){
            if(countN[c] > 1){
                return true;
            }
         }
        return false;
    

    }
}
