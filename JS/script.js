'use strict';

// let a = 3 * 2 ** 3 * 3;
// alert(a);

// let a = 'lsdhaskjflhg'; ----длинна строки
// console.log(a.length);

// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt  = 'aaa ' + str1 + ' bbb ' + str2 + ' ccc';  --шаблонные строки
// let a = `'a'
// 'b'
// 'c'`;
// console.log(a);
// console.log(`aaa${str1} bbb ${str2} ccc`)

// let a;
// console.log(a);
// let b = null;
// console.log(b);
// let q = false;
// let w = true;
// console.log(q, w);            ---------специальные значения;
// let e = 'sdf';
// let r = '3';
// console.log(e * r);
// console.log(10 / 0);
// console.log(-5 / 0);

// let a = '2' + 3;
// console.log(a);                 = 23
// let b = '1' + (2 + 3);
// console.log(b);                 ==15  ----автоматическое преобразование;
// let n = '5s' + '2';
// console.log(n);                 ==5s2
// let a = '' + 3 + 1;
// alert(a);

// let num = parseInt('12.6px');                ------выделение чисел в JS
// console.log(num);
// let a = parseFloat('12.6px');
// console.log(a);

// let a = '5px';
// let b = '6px';
// console.log(parseInt(a) + parseInt(b));
// ------выделение чисел в JS
// let a = parseFloat('5.5px');
// let b = parseFloat('6.75px');
// console.log(a + b);
// let a = parseFloat('5.5px');
// let b = parseFloat('6.75px');
// console.log(a + b + 'px');

// let a = 3;
// let b = 4;
// console.log(String(a) + String(b));     ---------Преобразование к строке;

// let a = 2234532;
// console.log(String(a).length);

// let s = 2435233446;                                     -----Преобразование строк;
// let v = 39768975;
// console.log(String(s).length + String(v).length);

// alert(String(true) + 1);                               ----Преобразование логического типа
// alert(String(true) + Number(true));

// let a = 'abcde';
// console.log(a[0]);
// console.log(a[2]);
// console.log(a[4]);
// ========
// let a = 'abcde';
// let b = a[4] + a[3] + a[2] + a[1] + a[0];  ----Получение символов строки
// console.log(b);
// ========
// let v = 'abcde';
// let s = 4;
// console.log(v[s]);

// let a = 'sdfgarfgf';
// console.log(a[a.length - 1]);
// let b = 'sdfgarfgf2353f';
// console.log(b[b.length - 2]);
// let c = 'sdfgarfgfdsa788906yhjdfsa'; ----------------Получение символа строки
// console.log(c[c.length - 3]);

// let a = '213512';
// console.log(+a[0] + +a[1] + +a[2] + +a[3] + +a[4] + +a[5]); -------Строки с цифрами
// console.log(Number(a[0]) + Number(a[1]) + Number(a[2]) + Number(a[3]) + Number(a[4]) + Number(a[5]));

// let a = 0.1 + 0.2;
// console.log(a.toFixed(3));
// let b = 0.3 - 0.1;            ---------Метод toFixed округляет дробные числа, преобразует в строку!!
// console.log(+b.toFixed(4) + 5);

// alert('Ваше имя: ' + prompt('Ваше имя?'));
// const a = prompt('Name');                       ------Prompt
// alert('Your name is ' + a + '!');

// let str = 'text';
// document.write('<i>' + str + '</i>');  ---------------Запись в HTML
// document.write(1 + '<br />' + 2 + '<br />' + 3 + '<br />' + 4 + '<br />' + 5);

// let arr = ['a', 'b', 'c', 'd'];
// arr[0] = arr[0] + 1;
// arr[1] = arr[1] + 2;        -----Дозапись в элементы массива
// arr[2] = arr[2] + 3;
// console.log(arr);

// let arr = [];
// arr[0] = '1';
// arr[1] = 't';
// arr[2] = true;
// console.log(arr);         -----Дозапись в элементы массива
// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);

// const arr = [];
// arr[3] = 'a';                -------добавление элементов в пустой массив
// arr[8] = 'b';
// console.log(arr.length);

// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

// let arr = ['a', 'b', 'c'];
// let key = 2;                        -----Получение элементов массива через переменную
// console.log(arr[key]);

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;                           Сумма элементов массива через переменные
// let key2 = 2;
// console.log(arr[key1] + arr[key2]);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[1];
// delete arr[3];                              Удаление элементов массива
// console.log(arr);

// let obj = { 1: 'a', 2: 'b', 3: 'c' }; -----------Объект с выводом его ключей
// console.log(obj[1], obj[2]);

// const obj = {
//   name: 'Serg',                      -----------Объект с выводом его ключей, в ковычках!
//   surname: 'xxx',
//   patronymic: 'Bor',
// };
// console.log(obj['name'], obj['surname'], obj['patronymic']);

// const obj = {
//   year: 2023,
//   month: 'June',               -----------Объект с выводом его ключей, без ковычек!
//   day: 'Wensday'
// }
// console.log(obj.year, obj.month, obj.day);

// let obj = {
//   '1a': 1,
//   b2: 2,
//   'с-с': 3,
//   'd 4': 4,
//   e5: 5,
// };
// console.log(obj['1a']);      -------не все элементы Объекта можно писать без ковычек
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// obj.b = 'r';
// console.log(obj);
// let obj = {x: 1, y: 2, z: 3};   --------работа с элементами объекта
// obj.x **= 2;
// obj.y **=2;
// obj.z **= 2;
// console.log(obj)

// let obj = {};
// obj['a'] = 1;
// obj['b'] = 2;               --------добавление новых элементов в объект
// obj['c'] = 3;
// console.log(obj)

// let obj = {}
// obj.a = 23;                 --------добавление новых элементов в объект
// obj.b = 'sd';
// obj.new = 242;
// console.log(obj)

// let obj = {a: 1, b: 2, c: 3};
// let k = Object.keys(obj);           -----Получение массива ключей объекта
// console.log(k)

// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.keys(obj).length);   -----Длина объекта

// let obj = {x: 1, y: 2, z: 3};
// let a = 'y'                         --------ключ объекта
// console.log(obj[a]);
// let obj = { x: 1, y: 2, z: 3 };
// console.log(obj['x']);
// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

// ЦИКЛЫ
// let arr = [1, 2, 3, 4, 5];
// let b = [5, 0, 34];             -------------Перебор массива циклом for-of
// for (let a of arr) {
//   b.push(a);
// }
// console.log(b);

// let obj = { x: 1, y: 2, z: 3 };
// for (let a in obj) {                -----------Перебор объекта циклом for-in
//   console.log(a);
// }

// let obj = { x: 1, y: 2, z: 3 };
// for (let a in obj) {
//   console.log(obj[a]);
// }

// let num = 3;
// while (num < 90) {		-------Цикл while
//   num *= 3;
// }
// console.log(num);

for (let i = 10; i < 1000; i++) {
  let str = String(i);
  if (str[0] == 1) {
    console.log(str[i]);
  }
}
