/**
 * Created by Alexandr on 13.01.2016.
 */
var fruits = ['apple', 'orange'];
fruits.push('kiwi');
fruits[fruits.length-2] ='pear';
console.log(fruits.shift());
fruits.unshift('apricot','peach');
console.log(fruits);
