// function toggle_theme() {
//   document.body.classList.toggle('is-dark');
// }
const text = document.querySelector('textarea');
const counter = document.querySelector('#counter');
text.addEventListener('input', function () {
  counter.textContent = text.value.length;
  //   const maxLength = text.getAttribute('maxlength');
  //   const remaining = maxLength - text.value.length;
  //   counter.textContent = remaining;
});
