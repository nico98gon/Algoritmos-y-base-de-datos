// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1


// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

// Mi código:

function firstUniqChar(s: string): number {
    const characts = new Map<string, number>();
    const deleteds: string[] = [];

    for ( let i = 0 ; i < s.length ; i++ ) {
        const char = s[i];
        if ( characts.has(char) ) {
            deleteds.push(char);
            characts.delete(char);
        } else if(deleteds.includes(char)) {
        } 
        else {
            characts.set(char, i);
        }
    }

    if (characts.size === 0) {
        return -1;
    }

    const values = characts.values();
    return Math.min(...values);
};

// Respuesta de ChatGPT sobre el código
// Tu solución también es correcta y utiliza un enfoque similar al mío. Al igual que mi solución, también utilizas un Map para almacenar los caracteres y su frecuencia.
// Sin embargo, en lugar de usar un objeto para almacenar la frecuencia y el índice, simplemente eliminas los caracteres repetidos del Map y guardas los eliminados en un array.

// Luego, verificas si el tamaño del Map es 0 y, de lo contrario, utilizas el método Math.min() para encontrar el índice mínimo en el Map.
// Esto es correcto y eficiente, ya que encontrar el mínimo en un Map es un tiempo constante O(1) y no requiere recorrer todo el Map.

// En general, ambas soluciones son eficientes y utilizan un enfoque similar utilizando un Map para almacenar los caracteres y su frecuencia.
// La diferencia está en cómo se almacenan los datos dentro del Map, ya sea utilizando un objeto o simplemente eliminando los caracteres repetidos y guardando los eliminados en un array.


// Código de ChatGPT:

function firstUniqChar2(s: string): number {
    const map = new Map<string, { index: number; count: number }>();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            const val = map.get(char);
            if (val) {
                map.set(char, { ...val, count: val.count + 1 });
            }
        } else {
            map.set(char, { index: i, count: 1 });
        }
    }

    let minIndex = s.length;

    for (const [char, { index, count }] of map) {
        if (count === 1 && index < minIndex) {
        minIndex = index;
        }
    }

    return minIndex === s.length ? -1 : minIndex;
}

// Otro código planteado por ChatGPT que utiliza Record para ser más eficiente

function firstUniqChar3(s: string): number {
    const charCount: Record<string, number> = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}

// En mi solución utilicé la interfaz Record que es una funcionalidad de Typescript.
// Es similar a un objeto, pero su diferencia radica en que los nombres de sus propiedades deben ser literales o tipos.
// Por lo tanto, es muy útil para crear objetos cuyas propiedades tienen un tipo específico.
// En este caso, se usa para crear un objeto donde las claves son los caracteres de la cadena s y los valores son un objeto que contiene dos propiedades:
// index que indica la primera aparición del carácter y count que indica cuántas veces aparece el carácter en la cadena.