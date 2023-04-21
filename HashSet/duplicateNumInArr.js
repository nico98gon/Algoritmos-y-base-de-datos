// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    for( let i = 0 ; i < nums.length ; i++ ) {
        for ( let j = i + 1 ; j < nums.length ; j++ ){
            if ( nums[i] === nums[j] ) {
                return true;
            }
        }
    }
    return false;
};

// En este caso, se utiliza un bucle anidado para comparar cada par de elementos en el array y verificar si hay duplicados.
// El bucle exterior utiliza una variable i para iterar sobre los elementos del array desde el primer elemento hasta el penúltimo elemento (arr.length - 1).
// El bucle interior, controlado por la variable j, se inicia desde i + 1 para asegurarse de que se comparen solo los elementos restantes en el array después
// del elemento actual representado por la variable i.

// La razón por la que j se define como i + 1 y no simplemente como 1 es porque se desea evitar comparar un elemento consigo mismo.
// Si se definiera j como 1, entonces en la primera iteración del bucle exterior, se estaría comparando el primer elemento del array con el segundo elemento (que sería arr[1]).
// Pero en realidad, lo que se quiere es comparar el primer elemento con todos los elementos restantes en el array, es decir, desde el segundo elemento hasta el último elemento.

// Al definir j como i + 1, se asegura que se inicie la comparación desde el siguiente elemento después del elemento actual representado por i,
// evitando así la comparación de un elemento consigo mismo. A medida que el bucle avanza, j se incrementa en 1 en cada iteración (j++),
// lo que significa que se compararán todos los elementos restantes en el array después del elemento actual representado por i.