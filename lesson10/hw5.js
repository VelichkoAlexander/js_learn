/**
 * Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
 Example string: Web Development Tutorial
 Expected Output: Development

 *
 * */


function longWord(str) {
	var arr = [];
	var chang = str.split(' ');
		chang.forEach(function(item){
		arr.push(item.length);
	});
	return chang[arr.indexOf(Math.max.apply(null, arr))];


}


console.log(longWord('web Development Tutorial'));