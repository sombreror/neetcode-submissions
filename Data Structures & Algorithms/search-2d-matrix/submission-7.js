class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        if (target < matrix[0][0] || target > matrix[ROWS - 1][COLS - 1]) {
            return false;
        }

        let left = 0,
            right = ROWS * COLS - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / COLS);
            const col = mid % COLS;

            const value = matrix[row][col];
            if (value === target) {
                return true;
            } else if (value < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
