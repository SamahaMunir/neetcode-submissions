class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let seen = new Set(nums);
        let longest = 0;

        for(const n of seen){

            if(!seen.has(n - 1)){
             let length = 1;
               
                while(seen.has(n + length)){
               
                length = length + 1;

                }
                longest = Math.max(length,longest);

            }
           
        }

       return longest;
    }
}
