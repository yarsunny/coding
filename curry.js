/*
   Please implement a curry() function, which accepts a function and return a curried one.

   Here is an example

   const join = (a, b, c) => {
      return `${a}_${b}_${c}`
   }

   const curriedJoin = curry(join)

   curriedJoin(1, 2, 3) // '1_2_3'

   curriedJoin(1)(2, 3) // '1_2_3'

   curriedJoin(1, 2)(3) // '1_2_3'
*/

function curry(fn) {

   return function curried (...args) {
      if (args.length < fn.length) {
         return function (...args2) {
            return curried(...[...args, ...args2]);
         }
      } else {
         return fn(...args);
      }
   }
}


const join = (a, b, c) => {
      return `${a}_${b}_${c}`
 }

const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));