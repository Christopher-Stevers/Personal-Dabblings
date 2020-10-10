let x = 1;
let y = 2;
let z = 3;
let a = 4;
let b = 5;
let c = 6;
const rbtn = document.querySelector("#right-button");
const lbtn = document.querySelector("#left-button");

lbtn.onclick = function () {
  if (x < 6) {
    ++x;
  } else {
    x = 1;
  }
  if (y < 6) {
    ++y;
  } else {
    y = 1;
  }
  if (z < 6) {
    ++z;
  } else {
    z = 1;
  }
  if (a < 6) {
    ++a;
  } else {
    a = 1;
  }
  if (b < 6) {
    ++b;
  } else {
    b = 1;
  }
  if (c < 6) {
    ++c;
  } else {
    c = 1;
  }

  document.getElementById("one").style.order = x;
  document.getElementById("two").style.order = y;
  document.getElementById("three").style.order = z;
  document.getElementById("four").style.order = a;
  document.getElementById("five").style.order = b;
  document.getElementById("six").style.order = c;
};

rbtn.onclick = function () {
  if (x > 1) {
    --x;
  } else {
    x = 6;
  }
  if (y > 1) {
    --y;
  } else {
    y = 6;
  }
  if (z > 1) {
    --z;
  } else {
    z = 6;
  }
  if (a > 1) {
    --a;
  } else {
    a = 6;
  }
  if (b > 1) {
    --b;
  } else {
    b = 6;
  }
  if (c > 1) {
    --c;
  } else {
    c = 6;
  }

  document.getElementById("one").style.order = x;
  document.getElementById("two").style.order = y;
  document.getElementById("three").style.order = z;
  document.getElementById("four").style.order = a;
  document.getElementById("five").style.order = b;
  document.getElementById("six").style.order = c;
};
