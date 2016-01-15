/**
 * Created by Alexandr on 13.01.2016.
 */
function getRngElem(array){
	var rand = 0 + Math.floor(Math.random() * (array.length  ));
	return array[rand];
}
var testArray = ['a', 'b', 'c', 4, 5, 6];

console.log(getRngElem(testArray));