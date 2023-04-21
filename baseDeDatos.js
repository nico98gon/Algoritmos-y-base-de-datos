// Primitive: Son inmutabbles y se pueden comparar entre sí
typeof undefined; // undefine
typeof true; // boolean
typeof 2; // number
typeof 'String'; // string
typeof 2n; // bigInt
typeof Symbol(2); // symbol
typeof null; // null* por error arroja object pero debería arrojar null

// Nonprimitive: Su espacio se guarda en un lugar específicio de la memoria y no pueden ser comparados entre sí por esta misma razón (===)

//objects
typeof {};
typeof [];
const set = new Map();
typeof set;

//function
typeof function () {};