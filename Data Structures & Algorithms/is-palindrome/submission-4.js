class Solution {
    isAlphanumeric(c) {
        return (
            (c >= "a" && c <= "z") ||
            (c >= "A" && c <= "Z") ||
            (c >= "0" && c <= "9")
        );
    }
    /**
     * Two-pointer variant: `left` starts at the beginning (++), `right`
     * at the end (--); compare pairs moving inward until they cross.
     *
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (!this.isAlphanumeric(s[left])) {
                left++;
                continue;
            }
            if (!this.isAlphanumeric(s[right])) {
                right--;
                continue;
            }
            if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true;
    }
}

module.exports = Solution;
