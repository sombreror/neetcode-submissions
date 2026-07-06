class Solution {
    /**
     * @param {string[]} strs => an array of strings
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        const normalize = (str) => str.split("").sort().join("");
        for (const str of strs) {
            const key = normalize(str);

            if (!map.has(key)) {
               map.set(key, []);  //[] create an empty array
            }
            
            map.get(key).push(str);
            
        }

        return Array.from(map.values());
    }
}