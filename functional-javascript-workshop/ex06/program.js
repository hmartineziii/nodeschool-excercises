function countWords(inputWords) {
  // SOLUTION GOES HERE
  var count = {};
  return inputWords.reduce(function(countMap, word){
	countMap[word] = ++countMap[word] || 1
	return countMap
	}, {})
}

module.exports = countWords