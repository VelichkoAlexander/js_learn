/**Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word
 *  of the string in upper case. Go to the editor
*Example string: the quick brown fox
*Expected Output: The Quick Brown Fox
*/


function toUp(str) {
	var changArr =	str.split(' ').map(function(item){
		 return item[0].toUpperCase() + item.slice(1);
	});

	return changArr.join(' ');
}


console.log(toUp('the quick brown fox'));
