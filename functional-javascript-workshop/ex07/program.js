function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  if (!arr.length) return []
  var head = arr[0];
  head = fn(arr[0]);
  var tail = arr.slice(1);
  return reduce(tail,fn,head))
}

module.exports = reduce
