var sum = 0;
var list_of_elements = process.argv.slice(2);
list_of_elements.forEach(function(elem){
	sum = sum + Number(elem);
})
console.log(sum);