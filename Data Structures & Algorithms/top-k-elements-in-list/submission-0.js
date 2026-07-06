class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //k => is the value of the numbers that are repeated more than one time;
        const count = new Map();
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        const sorted = [...count.entries()].sort((a, b) => b[1] - a[1]);

        return sorted.slice(0, k).map((entry) => entry[0]);
    }
}
