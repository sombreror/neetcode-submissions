class Solution {
  isAlphanumeric(c) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [];
        for(let c of s){
            if(this.isAlphanumeric(c)){
                arr.push(c.toLocaleLowerCase());
            }
        }
        const filtered = arr.join("");
        const reversed = arr.reverse().join("");
        return filtered === reversed;
    }
}

module.exports = Solution;