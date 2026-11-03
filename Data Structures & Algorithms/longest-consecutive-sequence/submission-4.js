class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let sequ = new Set();
        let longest = 0;
        for(const n of nums){
            sequ.add(n);
        }
        for(let n of sequ){
            if(!sequ.has(n - 1)){
                let length = 1;
                while(sequ.has(n + 1)){
                    n++;
                    length++;
                }
                longest = Math.max(length,longest);

            }
        }
        return longest;
    }
}
