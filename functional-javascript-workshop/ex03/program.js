function doubleAll(numbers){
	return numbers.map(function(number){
		return number * 2
	})
}

// function doubleAll(numbers){
// 	var result = [];
// 	for (var i = 0; i < numbers.length; i++){
// 		results.push(numbers[i]*2);
// 	}
// 	return result
// }

module.exports = doubleAll