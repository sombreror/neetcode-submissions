/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */
//guess is a function that is alredy implemented, so we can just call it and store the result inside a var.
//n => is the limit of the interval (1 to n).
//num is the number that is guessed, and we dont know if its right or not.
class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 0,
            right = n;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const result = guess(mid);
            if (result === 0) {
                return mid; // the number was guessed correctly.
            } else if (result === 1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
}