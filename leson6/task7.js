/**
 * Код ниже получает из массива строк новый массив,
 содержащий их длины. Перепишите его: уберите цикл,
 используйте вместо него метод map.
 */


var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
var arrLength = [];
arrLength = arr.map(function(name){

	return name.length

});
console.log(arrLength); // 4,5,2,5