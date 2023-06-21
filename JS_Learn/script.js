// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelectorAll('#elem1');
// let p = document.querySelector('p');

// function calc() {
//   let a = 0;
//   for (let i = 0; i < elem1.length; i++) {
//     a += +elem1[i].value;
//   }
//   return a;
// }
// elem.addEventListener('click', function () {
//   let b = calc();
//   p.innerText = b / elem1.length;
// });
let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');
elem1.addEventListener('click', function () {
  let a = [];
  for (let i = 0; i < elem.className.length; i++) {
    a.push(elem.className[i]);
  }
  console.log(a);
});

// elem1.addEventListener('blur', function () {
//   console.log((elem1.value = 2 ** 3));
// });
