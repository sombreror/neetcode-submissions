class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //i can store the value in a stack (a data structure) that can be considered as a pile.
    //this way i can see if the string it has a correspondence;
    //like: if the pile there is "(" and ")", in whatever position, then it signify that the solution is correct and the return value should be true, if not false.
    isValid(s) {
        //to control if the correspondence is right or no.
        const pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        let stack = []; //creating stack

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (!pairs[char]) {
                stack.push(char); //push the char inside the stack
            } else {
                if (
                    stack[stack.length - 1] === pairs[char] &&
                    stack.length > 0
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
