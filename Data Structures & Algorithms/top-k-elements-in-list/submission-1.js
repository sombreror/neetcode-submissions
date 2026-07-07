class Solution {
    /**
     * Returns the `k` most frequent values in `nums`.
     * Count occurrences in a Map, sort the entries by count (descending),
     * then keep the first `k` values.
     *
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        const sorted = [...count.entries()].sort((a, b) => b[1] - a[1]);

        return sorted.slice(0, k).map((entry) => entry[0]);
    }
}

module.exports = Solution;