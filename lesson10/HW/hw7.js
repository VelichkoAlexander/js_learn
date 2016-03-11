function reverseIt(data) {
	if (typeof(data) === 'object') {
		return data
	} else if (typeof(data) === 'boolean') {
		return data
	} else if(typeof(data)==='number') {
		return +(String(data).split('').reverse().join(''));
	} else if(typeof(data)==='string'){
		return String(data).split('').reverse().join('');
	}

}

console.log(reverseIt(314159));
console.log(reverseIt('Hello'));
console.log(reverseIt(true));
console.log(reverseIt([]));
console.log(reverseIt({}));