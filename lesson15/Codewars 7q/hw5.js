/**
 *http://www.codewars.com/kata/javascript-namespacing
 */


var MyNamespace = {
	MyClass: function(str) {
		this.sayHello = function (){
			return str;
		}
	}

};

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello();

console.log(phrase);