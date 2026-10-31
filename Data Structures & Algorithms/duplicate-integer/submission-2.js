class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         let seen = new Set();

         for(const c of nums){
            if(seen.has(c)) {
                return true;
            }
            seen.add(c);
            
         }
         return false;
    }
}
