// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};


// El operador ^ en JavaScript es el operador de XOR (bitwise XOR). Es un operador binario que se aplica a nivel de bits en números enteros.

// El operador XOR toma dos números y realiza una operación de "o exclusivo" (XOR) en sus bits individuales. 
// El resultado de la operación XOR en cada bit es 1 si los bits son diferentes y 0 si los bits son iguales.

// Aquí hay algunos ejemplos de cómo funciona el operador XOR a nivel de bits:

// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 0

// Entonces, si aplicamos el operador XOR en dos números, digamos A y B, el resultado será un nuevo número que tiene bits 1 en las posiciones donde los bits de A y B son diferentes,
// y bits 0 en las posiciones donde los bits de A y B son iguales.

// En el caso de la solución que proporcioné, estamos usando el operador XOR para realizar la operación de cancelación de pares de elementos que aparecen dos veces en el array nums. 
// Al aplicar el operador XOR en cada elemento del array nums con el valor actual de result, estamos cancelando los pares de elementos que aparecen dos veces, 
// ya que el XOR de dos números iguales es 0, y el XOR de un número con 0 es el propio número.
// Esto deja solo el elemento que aparece una sola vez sin ser cancelado por los pares, y el resultado final de result será el valor del elemento que aparece una sola vez.