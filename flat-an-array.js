function flat(arr, depth = 1) {
	function flatByOne(arr2) {
		return [].concat(...arr2);
	}

	if (arr.some(Array.isArray)) {
		if (depth === 1) {
			return flatByOne(arr);
		} else {
			return flat(flatByOne(arr), depth -1);
		}
	} else {
		return arr;
	}
}

console.log(flat([1,[2, [3]]], 2))