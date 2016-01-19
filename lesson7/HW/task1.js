var make_lazy = function (func) {

		var fun1 = arguments[0];
		var args = Array.prototype.slice.call(arguments, 1);


	console.log(args);

	return function () {
		return fun1.apply(this,args);


	}

};

//
//// Methods taking in a single parameter
//
//var double = function (n) {
//	return n * 2;
//};
//
//var lazy_value = make_lazy(double, 5);
//
//
//console.log(lazy_value());

 //Methods taking in multiple parameters
//
var add = function (a, b) {
	return a + b;
};

var lazy_sum = make_lazy(add, 2, 3);
console.log(lazy_sum());
//////Test.expect(lazy_sum() === 5, 'Evaluates the expression when required');


