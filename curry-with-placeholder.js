function curry(fn) {
	return function curried(...args) {
		if (fn.length < args.length && args.every(arg !== curry.placeholder)) {
			return function (...args2) {
				let newArgs = [];


				return curried(...[...args, ...args2]);
			}
		} else {
			return fn(...args);
		}
	}
}
curry.placeholder = Symbol();

function join(a, b, c) {
	return `${a}_${b}_${c}`;
}

const curriedJoin = curry(join);

curriedJoin(_, _, _)(1)(_, 3)(2);