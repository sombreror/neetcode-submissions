class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            if (map.has(val)) {
                return true;
            }
            map.set(val, 1);
        }
        return false;
    }
}
