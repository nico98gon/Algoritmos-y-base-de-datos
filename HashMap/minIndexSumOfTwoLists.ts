// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.


// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

// Solución que se me ocurrió, pero al no utilizar Map Hash, es de O(n^2):

const findRestaurantType = function(list1: string[], list2: string[]): string[] {
    const commonWords: string[] = [];
    let sum: number = 99999;

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                const currSum: number = i + j;

                if (currSum < sum) {
                    sum = currSum;
                    commonWords.splice(0, commonWords.length, list1[i]);
                } else if (currSum === sum) {
                    commonWords.push(list1[i]);
                }
            }
        }
    }

    return commonWords;
};



// Solución aportada por ChatGPT con Hash Map y por lo tanto O(n + m):

const findRestaurantType2 = function(list1: string[], list2: string[]): string[]{
    const map = new Map<string, number>();
    let minSum: number = Infinity;
    const commonWords: Array<string> = [];

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            const indexSum: number = j + (map.get(list2[j]) || 0);
            if (indexSum < minSum) {
                minSum = indexSum;
                commonWords.length = 0;
                commonWords.push(list2[j]);
            } else if (indexSum === minSum) {
                commonWords.push(list2[j]);
            }
        }
    }

    return commonWords;
};