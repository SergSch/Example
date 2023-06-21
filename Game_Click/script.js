function start_game() {
  object.classList.toggle('start');
}

function finish_game() {
  object.classList.remove('start');
  alert(`You lose. Score ${score}`);
}

function hit() {
  score++;
  document.title = `Score ${score}`;

  object.classList.remove('start');
  void object.offsetWidth;
  object.classList.add('start');

  let random_offset = Math.random() * 340;
  object.style.left = `${random_offset}px`;

  change_object_back();
}

function miss(event) {
  if (event.target.id == 'area') {
    score--;
    document.title = `Score ${score}`;

    if (score <= 0) {
      finish_game();
    }
  }
}

function change_object_back() {
  const colors = ['purple', 'yellow', 'orange', 'blue', 'red'];
  const random_index = Math.floor(Math.random() * colors.length);
  object.style.background = colors[random_index];
}

let score = 0;
let object = document.querySelector('#object');
