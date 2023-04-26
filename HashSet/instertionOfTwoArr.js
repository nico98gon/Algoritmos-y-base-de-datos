// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result = [];

    // Iterar sobre los elementos de set1
    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }
    return result;
};


// En JavaScript, un Set es un objeto que permite almacenar colecciones de valores únicos, donde cada valor puede aparecer solamente una vez en el Set.
// A diferencia de un arreglo, que es una colección ordenada de elementos, un Set no mantiene un orden específico de los elementos y no permite elementos duplicados.

// Las principales diferencias entre un Set y un arreglo son:

// Elementos únicos: En un Set, cada valor puede aparecer solamente una vez, lo que significa que no se pueden tener duplicados.
// En cambio, en un arreglo, se pueden tener elementos duplicados.

// Orden: A diferencia de los arreglos, los Sets no mantienen un orden específico de los elementos.
// Los elementos en un Set se almacenan en un orden arbitrario y no se pueden acceder por índice.

// Métodos y propiedades: Los Sets tienen métodos y propiedades específicas, como add(), delete(), has(), y size, que no están disponibles en los arreglos.

// En el caso del problema de encontrar la intersección de dos arreglos,
// se utiliza un Set para aprovechar su capacidad de almacenar elementos únicos de forma eficiente y para evitar duplicados en el resultado.
// Al crear un Set a partir de un arreglo, se eliminan automáticamente los elementos duplicados, lo que facilita la identificación de la intersección de los dos arreglos.

// Se podría utilizar directamente el arreglo en un bucle for, pero eso implicaría iterar manualmente sobre el arreglo, comparar y manejar duplicados,
// lo cual podría resultar en un código más complejo y menos eficiente en términos de rendimiento.
// Al crear un Set, se aprovechan las ventajas de su naturaleza de elementos únicos,
// lo que simplifica el proceso de encontrar la intersección de dos arreglos y evita duplicados en el resultado.



// La solución anterior tiene un time complexity de O(n) y space complexity de O(n + m) 

// La siguiente solución tiene un time complexity de O(n^2) y space complexity de O(n)

const intersection2 = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            if (!result.includes(nums1[i])) {
                result.push(nums1[i]);
            }
        }
    }
    return result;
};