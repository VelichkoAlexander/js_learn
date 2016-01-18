/**Напишите функцию складывает числа из 2х
 * вызовов
 *
 */

console.log(addf(3)(4)); //7


function addf (a) {
	return function (b){
		return a+b;
	}
}