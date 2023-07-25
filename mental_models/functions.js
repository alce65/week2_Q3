/* eslint-disable no-compare-neg-zero */
/* eslint-disable use-isnan */
/* eslint-disable no-self-compare */
/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */

foo(); // Ejemplo de Hoisting
// Error bar();
// Error arrow();

// Declaración

function foo() {
  // Implementacion
  console.log('Soy foo');
}

// Asignación de un function expression (= función anónima)

const bar = function () {};
const arrow = () => {};

// foo(...argumentos) ===> VALORES

// const foo = (parámetros) => {} ===> VARIABLES

const add = (x, y) => {
  const r = x + y;
  return r;
};

const x = 5;
console.log('Add', add(x));
console.log('Add', add(x, 4));
console.log('Add', add(x, 4, 8));

const countDwarves = function () {
  return 7;
};

const dwarves = countDwarves;
console.log(dwarves);

console.log(countDwarves());
console.log(dwarves());
