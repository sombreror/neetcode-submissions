class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        while (nums.indexOf(val) !== -1) {
            nums.splice(nums.indexOf(val), 1);
        }
        return nums.length;
    }
}
