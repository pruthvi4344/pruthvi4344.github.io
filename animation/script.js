const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 778);
const CANVAS_HEIGHT = (canvas.height = 625);
const spriteH = 400;
const spriteW = 350;
let gameFrame = 0;
let stagger = 0;
let staggerFrame = 5;
const myImg = document.getElementById("myImg");
let index = 1;
let action = "right";

let keyAction = document.getElementById("menu").value;

// window.addEventListener("keydown", (e) => {
//   switch (e.key) {
//     case "a":
//       player.style.left = parseInt(player.style.left) - movePlayer + "px";
//       break;
//     case "d":
//       player.style.left = parseInt(player.style.left) + movePlayer + "px";
//       break;
//     case "w":
//       player.style.top = parseInt(player.style.top) - movePlayer + "px";
//       break;
//     case "s":
//       player.style.top = parseInt(player.style.top) + movePlayer + "px";
//       break;
//   }
// });
const menu = document.getElementById("menu");
// menu.addEventListener
menu.addEventListener("change", function (e) {
  keyAction = e.target.value;
});
console.log(typeof keyAction, keyAction);
const animationStates = [
  {
    name: "left",
    frames: 8,
  },
  {
    name: "right",
    frames: 8,
  },
];
function animate() {
  if (stagger % staggerFrame == 0) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    index = animationStates.findIndex((state) => state.name === keyAction);
    console.log(index);
    let frameX = spriteW * (gameFrame % animationStates[index].frames);
    let frameY = spriteH * index;
    ctx.drawImage(
      myImg,
      frameX,
      frameY,
      spriteW,
      spriteH,
      0,
      50,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
    gameFrame++;
    stagger = 0;
  }
  stagger++;

  requestAnimationFrame(animate);
}

animate();
