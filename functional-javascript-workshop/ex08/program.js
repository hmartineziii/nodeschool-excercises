// function duckCount(){
// 	var counter = 0
// 	for ( i in duckCount.arguments){
// 		if(Object.prototype.hasOwnProperty.call(duckCount.arguments[i], 'quack'))
// 			counter++			
// 	}
// 	return counter
// }



//SOLUTION
// function duckCount(){
// 	return Array.prototype.slice.call(arguments).filter(function(obj){
// 		return Object.prototype.hasOwnProperty.call(obj.'quack')
// 	}).length
// }

//ALTERNATIVE SOLUTION
function duckCount(){
	return Array.prototype.slice.call(arguments).reduce(function(prev, curr, idx, array){
		if (Object.prototype.hasOwnProperty.call(curr,'quack'))
			return prev + 1
		return prev
	},0)
}






module.exports = duckCount
