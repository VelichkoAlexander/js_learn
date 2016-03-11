function delay(func, time) {

	return function () {
		setTimeout(function () {
			var args = arguments;
			var ctx = this;
			func.apply(ctx, args)
		}, time)
	}
}


function f(x) {
	alert(x);
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд