
/**
 * @param {number} n
 * @return {boolean}
 */


// Código 1:

const isHappy = function(n) {

    while (n !== 1 && n !== 4) { // 4 es condición de salida para ciclos infinitos ya que es el número no feliz más pequeño
        const digits = n.toString().split('').map(Number);
        n = 0;
        for (let i = 0; i < digits.length; i++) {
            n += Math.pow(digits[i], 2);
        }
    }

    return n === 1;
};


// Código 2:

const isHappy2 = function(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) { // Mientras no llegue a 1 y no haya caído en un ciclo infinito
        seen.add(n);
        let sum = 0;

        while (n > 0) {
            const digit = n % 10; // Obtener el último dígito
            sum += digit * digit; // Sumar el cuadrado del dígito
            n = Math.floor(n / 10); // Eliminar el último dígito del número
        }
        n = sum; // Actualizar el valor de n para la siguiente iteración
    }
    return n === 1;
};



// Código 1:

// Costo temporal: El código utiliza dos bucles anidados.
// El bucle externo se ejecuta hasta que result sea igual a 1 o 4, y el bucle interno se ejecuta para calcular la suma de los cuadrados de los dígitos en result.
// Por lo tanto, el costo temporal del código 1 depende de cuánto tiempo tome llegar a 1 o 4 en el peor caso.
// En el peor caso, si n es un número no feliz que cae en un ciclo infinito, el costo temporal sería alto.

// Costo espacial: El código utiliza una variable result para almacenar el resultado parcial en cada iteración del bucle,
// y también crea un array de dígitos usando toString().split('').map(Number). Por lo tanto, el costo espacial depende del tamaño del número n y la longitud de los dígitos en n.


// Código 2:

// Costo temporal: El código utiliza un bucle while que se ejecuta hasta que n sea igual a 1 o hasta que n caiga en un ciclo infinito.
// El costo temporal del código 2 también depende de cuánto tiempo tome llegar a 1 o caer en un ciclo infinito en el peor caso.

// Costo espacial: El código utiliza un conjunto (Set) llamado seen para almacenar los números vistos y evitar ciclos infinitos.
// Por lo tanto, el costo espacial depende del tamaño del número n y la cantidad de números vistos antes de llegar a 1 o caer en un ciclo infinito.


// CONCLUSIÓN:
// En general, ambos códigos tienen un desempeño similar en términos de eficiencia temporal y espacial.
// Sin embargo, el código 2 utiliza un conjunto (Set) para evitar ciclos infinitos,
// lo que podría ser más eficiente en términos de espacio en comparación con la creación de un nuevo array de dígitos en cada iteración,
// como en el código 1. Por lo tanto, en términos de eficiencia espacial, el código 2 podría ser ligeramente mejor.
// En términos de eficiencia temporal, ambos códigos dependen del peor caso de llegar a 1 o caer en un ciclo infinito,
// y podrían tener un rendimiento similar en diferentes casos de entrada.




// Código 3:

const isHappy3 = function(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) { // Mientras no llegue a 1 y no haya caído en un ciclo infinito
        seen.add(n);
        const digits = n.toString().split('').map(Number);
        n = 0;
        for (let i = 0; i < digits.length; i++) {
            n += Math.pow(digits[i], 2);
        }
    }

    return n === 1;
};

// Este código es una mezcla entre el código 1 y 2.