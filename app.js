const btn = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "blue", "yellow", "violet", " brown"];

btn.addEventListener("click", changeBackround);

function changeBackround() {
  const index = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[index];
}
