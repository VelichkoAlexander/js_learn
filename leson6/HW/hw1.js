/** У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:
 *  Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
 *  Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
 * */

var obj = {
	className: 'open menu menu'
};

function removeClass(obj, cls) {

	var arr = obj.className.split(' ');
	var resultArr = arr.filter(function(name){
		if(!(name===cls)){
			return name;
		}
	});
	console.log(resultArr);

}


removeClass(obj, 'menu');