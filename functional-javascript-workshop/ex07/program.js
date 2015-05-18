function reduce(arr, fn, initial) {
	var current = initial;
	for (var i=0; i<arr.length; i++)
		current = fn(current, arr[i]);
	return current
}

module.exports = reduce
