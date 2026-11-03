class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let sequ = new Set(nums);
        let longest = 0;
        
        for(let n of sequ){
            if(!sequ.has(n - 1)){
                let length = 1;
                while(sequ.has(n + 1)){
                    n++;
                    length++;
                }
                longest = Math.max(longest,length);

            }
        }
        return longest;
    }
}
