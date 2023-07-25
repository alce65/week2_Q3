/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-shadow-restricted-names */
// JS de tipado débil y dinámico

// Otros lenguajes (Java, C#) de tipado fuerte y estático
// let foo: string

// eslint-disable-next-line prefer-const
let foo;
console.log(typeof foo);
foo = 12;
console.log(typeof foo);
foo = 'pepe';
console.log(typeof foo);
foo = true;
console.log(typeof foo);
foo = undefined;
console.log(typeof foo);
foo = null;
console.log(typeof foo, 'mentira, es null');
foo = 0n;
console.log(typeof foo);
foo = Symbol('');
console.log(typeof foo);
foo = {};
console.log(typeof foo);
foo = () => {};
console.log(typeof foo, 'también es object');

// Error foo = undefined;
// TypeError console.log(foo.mood);

// ReferenceError: console.log(jabberwocky); // ?
// let jabberwocky;

console.log(jabberwocky); // ?
var jabberwocky = 23;

console.log(Number.MAX_VALUE); // 1.7976931348623157e308;
console.log(Number.MAX_VALUE * 2);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9_007_199_254_740_991n + 2n);

console.log(1 / 0);
console.log(0 / 2);
console.log(0 / 0);

console.log(Number('pepe'));

const obj = {
  name: 'Pepe',
};

obj.age = 22;

delete obj.name;

console.log(obj);

// eslint-disable-next-line dot-notation
obj['name'] = 'Pepe';
console.log(obj);

const property = 'name';

console.log(obj.age);
console.log(obj[property]);
console.log(obj.name);
