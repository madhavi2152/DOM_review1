const root = document.querySelector(".root");
root.style.height = "650px";
root.style.width = "250px";
root.style.backgroundColor = "black";
root.style.borderRadius = "20px";
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

red.style.height = "200px";
red.style.width = "200px";
red.style.borderRadius = "100px";
red.style.border = "5px solid white";

yellow.style.height = "200px";
yellow.style.width = "200px";
yellow.style.borderRadius = "100px";
yellow.style.border = "5px solid white";

green.style.height = "200px";
green.style.width = "200px";
green.style.borderRadius = "100px";
green.style.border = "5px solid white";

async function redf() {
  red.style.backgroundColor = "red";
  return new Promise((res, rej) => {
    setTimeout(() => {
      red.style.backgroundColor = "black";
      res("success");
    }, 5000);
  });
}

async function greenf() {
  green.style.backgroundColor = "green";
  return new Promise((res, rej) => {
    setTimeout(() => {
      green.style.backgroundColor = "black";
      res("success");
    }, 3000);
  });
}

async function yellowf() {
  yellow.style.backgroundColor = "yellow";
  return new Promise((res, rej) => {
    setTimeout(() => {
      yellow.style.backgroundColor = "black";
      res("success");
    }, 3000);
  });
}

async function hello() {
  await redf();
  await greenf();
  await yellowf();
}

setInterval(() => hello(), 11000);
