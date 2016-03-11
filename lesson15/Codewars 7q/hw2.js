/**
 * http://www.codewars.com/kata/singleton-pattern
 */

var Singleton = function () {
	this.hello = 1;
	if (Singleton.__instance) {
		return Singleton.__instance;
	}
	Singleton.__instance = this;

};