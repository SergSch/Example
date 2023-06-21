// Задача. Есть массив numbers. Нужно вывести квардат каждого числа из этого массива
// С помощью цикла for.
// const numbers = [10, 20, 5, 11, 6, 4]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]**2)
// }

// Задача. Есть массив строк. Нужно вывести в консоли каждую строку в верхнем регистре.
// const countries = ['Germany', 'France', 'Spain', 'Chech'];
// const countriesUpperCase = [];
// for (let i = 0; i < countries.length; i++) {
//   let a = countries[i].toUpperCase();
//   countriesUpperCase.push(a);
// }
// console.log(countriesUpperCase);

// arr.push(prompt())
// // добавляет элемент в конце массива
// arr.unshift(prompt())
// // добавляет элемент в начале массива
// arr.pop()
// // удаляет последний элемент массива
// arr.shift()
// // удаляет первый элемент массива

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.

// function range(num1, num2) {
//   if (num1 < num2) {
//     const tmp = num1;
//     num1 = num2;
//     num2 = tmp;
//   }
//   let arr = [];
//   for (let i = num1; i < num2; i++) {}
//   return arr;
// }
// console.log(range(2, 9));

// function func(val_1, val_2) {
//   let arr = [];
//   let start;
//   let end;
//   if (val_1 > val_2) {
//     start = val_2;
//     end = val_1;
//   } else {
//     start = val_1;
//     end = val_2;
//   }

//   for (let i = start; i < end; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(func(9, 2));

// const products = [
//   {
//     name: 'Iphone 13',
//     price: 10000,
//   },
//   {
//     name: 'Iphone 14',
//     price: 15000,
//   },
//   {
//     name: 'Iphone 15',
//     price: 20000,
//   },
// ];
// // Задача. Посчитать сумму стоимости всех продуктов в массиве products и вывести в консоли
// function calc() {
//     let a = 0;
//     for (let i = 0; i < products.length; i++) {
//        a +=products[i].price;
//     }
//     return a;
// }
// console.log(calc())
// Задача. Вывести в консоли названия каждого продукта
// function prin() {
//   for (let i = 0; i < products.length; i++) {
//     console.log(products[i].name);
//   }
// }
// prin();

// const users = [
//   {
//     name: 'Yuliya',
//     email: 'yuliya@gmail.com',
//     login: 'Simbo7',
//     age: 23,
//   },
//   {
//     name: 'Arsen',
//     email: 'arsen@gmail.com',
//     login: 'Simbo77',
//     age: 15,
//   },
//   {
//     name: 'Alexander',
//     email: 'alex@gmail.com',
//     login: 'Simbo777',
//     age: 25,
//   },
// ];
// function printUsers() {
//   for (let i = 0; i < users.length; i++) {
//     console.log(`Ваш email - ${users[i].email}, а ваш логин - ${users[i].login}`);
//   }
// }
// printUsers();
// Отобразить в консоли имя и email каждого пользователя в виде, используя цикл for
// "Ваш email - {email пользователя}, а ваш логин - {login пользователя}"
// 1. "Ваш email - yuliya@gmail.com, а ваш логин - Simbo7"
// 2. "Ваш email - arsen@gmail.com, а ваш логин - Simbo77"
// 3. "Ваш email - alex@gmail.com, а ваш логин - Simbo777"

// Отобразить в консоли login только тех пользователей, возраст которых больше 18

// // Написать функцию, которая принимает товары (массив объектов) и возвращает строку Самый дорогой товар <НАЗВАНИЕ> стоит <NN> EUR
// const articles = [
//   {
//     name: 'lg',
//     price: 3000,
//   },
//   {
//     name: 'sony',
//     price: 57000,
//   },
//   {
//     name: 'samsung',
//     price: 10000,
//   },
// ];
// function fn()

// let res = articles.sort(function (a, b) {
//   if (a['price'] < b['price']) return -1;
// });
// let a = res[res.length - 1];
// console.log(`The most expancive article ${a.name} costs ${a.price} EUR`);
// function func(val_1, val_2) {
//   let arr = [];
//   let start;
//   let end;
//   if (val_1 > val_2) {
//     start = val_2;
//     end = val_1;
//   } else {
//     start = val_1;
//     end = val_2;
//   }

//   for (let i = start; i < end; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(func(9, 2));

// const users = [
//   {
//     name: 'Yuliya',
//     email: 'yuliya@gmail.com',
//     login: 'Simbo7',
//     age: 23,
//   },
//   {
//     name: 'Arsen',
//     email: 'arsen@gmail.com',
//     login: 'Simbo77',
//     age: 15,
//   },
//   {
//     name: 'Alexander',
//     email: 'alex@gmail.com',
//     login: 'Simbo777',
//     age: 25,
//   },
// ];

// Создать новый массив, в который поместить логины только тех пользователей,
// возраст которых больше 18
// function newArr() {
//   let newArr = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age >= 18) {
//       newArr.push(users[i].name);
//     }
//   }
//   return newArr;
// }
// console.log(newArr());

// Задача. Создать функцию, которая принимает число и выводит все числа от 0 до числа,
// которое принимаем в параметре
// function fn (val) {
//   for(let i = 0; i < val; i++) {
//     console.log(i);
//   }
//   return;
// }
// fn(5);

// Задача. Создать функцию, которая принимает массив и отображает каждый элемент массива
// в консоли
// function fn(val) {
//   for (let i = 0; i < val.length; i++) {
//     console.log(val[i]);
//   }
//   return;
// }
// fn([1, 4, 7]);

// Задача. Создать функцию подсчета площади комнаты.
// Она должна принимать длину и ширину, а в консоли отображать площадь
// площадь равна произведению ширины на длину. S = a * b
// function fn(width, long) {
//   return width * long;
// }
// console.log(fn(5, 4));

// Задача. Создать функцию, которая принимает число и выводит массив с числами
// от 0 до этого числа.
// function fn(val) {
//   let arr = [];
//   for(let i = 0; i < val; i++) {
//     arr.push(i)
//   }
//   return arr;
// }
// console.log(fn(5));

// Задача. Написать функцию, которая возвращает сумму четных чисел от 1 до 10
// function fn () {
//   let a = 0;
//   for(let i = 0; i <= 10; i++) {
//     if(i%2 == 0) {
//       a += i;
//     }
//   }
//   return a;
// }
// console.log(fn());

// Задача. Написать функцию, которая принимает массив чисел (оценок студента) и возвращает его средний балл
// function fn(val) {
//   let a = 0;
//   for (let i = 0; i < val.length; i++) {
//     a += val[i];
//   }
//   return a / val.length;
// }
// console.log(fn([3, 4, 5]));
