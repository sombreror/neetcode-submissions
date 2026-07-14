class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    //piles => array of bananas
    //piles[i] => is the pile number i (so 1, 2, 3 ecc...) where there are x bananas;
    //h => is the number of hours we have to eat all the bananas of all the piles.
    //k => the number of bananas per hour we have to eat to finish all of them
    minEatingSpeed(piles, h) {
        let left = 1,
            right = Math.max(...piles);
        let result = right;
        while (left <= right) {
            const k = Math.floor((left + right) / 2);
            let htot = 0;

            for (const pile of piles) {
                htot += Math.ceil(pile / k); //to see the tot hours, and to later control if k is right or no;
            }

            if (htot <= h) {
                result = k;
                right = k - 1;
            } else {
                left = k + 1;
            }
        }
        return result;
    }
}
