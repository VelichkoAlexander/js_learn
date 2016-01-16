/*  В объекте есть свойство className, которое содержит
 список «классов» – слов, разделенных пробелом.
 Создайте функцию addClass(obj, cls), которая добавляет в
 список класс cls, но только если его там еще нет.
 Ваша функция не должна добавлять лишних пробелов.*/


var obj = {
	className: 'open menu'
};

var obj1 = {
	className: 'open menu alex'
};

function addClass(obj, cls) {

	var arr = obj.className.split(' ');
	console.log(arr.indexOf(cls));
	if (arr.indexOf(cls) === -1) {
		arr.push(cls);
		obj.className = arr.join(' ');
		console.log(obj);
	} else {
		console.log('Have exist class name');
	}


}

addClass(obj, 'alex');
addClass(obj1, 'alex');