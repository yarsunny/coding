function throttle(func, wait) {
  let isWaiting;
	let lastArgs;

	return function throttled(...args) {
		if (isWaiting) {
			lastArgs = args;
		} else {
			func.call(this, ...args);
			isWaiting = setTimeout(() => {
        if (lastArgs) {
          func.apply(this, lastArgs);
        }
			}, wait)
		}
	}
}