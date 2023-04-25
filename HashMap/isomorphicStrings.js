// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.


// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solución que se me ocurrió (funciona, pero utiliza dos map):

const isIsomorphic = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();

    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( mapS.has(s[i]) ) {
            if (mapS.get(s[i]) !== t[i]) {
                return false; // Carácter ya mapeado a otro valor en t
            }
        }
            mapS.set( s[i], t[i] );

        if ( mapT.has(t[i]) ) {
            if (mapT.get(t[i]) !== s[i]) {
                return false; // Carácter ya mapeado a otro valor en s
            }
        }
            mapT.set( t[i], s[i] );
    }

    return true;
};


// Solución mejorada por chatGPT:

const isIsomorphic2 = function(s, t) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            if ([...map.values()].includes(t[i])) {     // Se verifica que no haya una clave ya mapeada a otro valor
                return false;
            }
            map.set(s[i], t[i]);
        } else {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        }
    }

    return true;
};


// Otra solución mejorada por chatGPT:
const isIsomorphic3 = function(s, t) {

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            if (Array.from(map.values()).includes(t[i])) {  //Cambia sólamente esta línea
                return false;
            }
            map.set(s[i], t[i]);
        } else {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        }
    }

    return true;
};