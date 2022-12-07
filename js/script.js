const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 650);
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})
document.addEventListener("touchstart", (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})
document.addEventListener("mousedown", (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < -30) {
    rock.style.display = 'none';
  }
  else {
    rock.style.display = ''
  }


  if (rockLeft < 68 && rockLeft > 0 && dinoTop > 130) {
    if (score.innerText > 800) {
      alert(score.innerText + " pontod lett... 🥳 \nnyertél, ügyi vagy :) \nkódod: MAJON1");
    }
    else {
      alert(score.innerText + " pontod lett... 🥳" + "\nújrapróbálod?");
    }
    location.reload();
  }
}, 50);