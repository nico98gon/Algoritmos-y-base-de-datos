// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solución que no utiliza hash map y tiene una complejidad temporal de O(n^2):

const twoSum = function(nums, target) {
    for ( let i = 0 ; i < nums.length ; i++ ) {
        for ( let j = i + 1 ; j < nums.length ; j++ ) {
            if ( target === nums[i] + nums[j] ) {
                return [i, j];
            }
        }
    }
};


// Solución que si utiliza hash map y tiene una complejidad temporal de O(n):

const twoSum2 = function(nums, target) {
    const map = new Map();

    for ( let i = 0; i < nums.length ; i++ ) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
    return [];
};


// En este enfoque, utilizamos un mapa para almacenar los valores del arreglo nums como claves y sus índices correspondientes como valores.
// Recorremos el arreglo una sola vez y en cada iteración calculamos el complemento del valor actual con respecto al target.
// Verificamos si ese complemento ya está presente en el mapa utilizando el método has() del mapa.
// Si es así, significa que hemos encontrado un par que cumple con la condición, por lo que retornamos los índices almacenados en el mapa junto con el índice actual.
// Si no se encuentra el complemento en el mapa, se agrega el valor actual al mapa con su índice correspondiente como valor.
// Si no se encuentra ningún par que cumple con la condición, se retorna un arreglo vacío.

// Este enfoque tiene una complejidad temporal de O(n), ya que solo requiere un único recorrido del arreglo nums.
// Por lo tanto, es más eficiente que la solución original con dos bucles anidados en casos donde el arreglo es grande.