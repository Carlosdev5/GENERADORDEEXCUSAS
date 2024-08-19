/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let h1 = document.getElementById("excuse");
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let getRandomInt = array => {
    let index = Math.floor(Math.random() * array.length);
    return index;
  };
  let excuse =
    who[getRandomInt(who)] +
    " " +
    action[getRandomInt(action)] +
    " " +
    what[getRandomInt(what)] +
    " " +
    when[getRandomInt(when)];
  h1.innerHTML = excuse;
};
