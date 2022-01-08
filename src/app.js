/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const random1 = Math.floor(Math.random() * who.length, what.length);
  const random2 = Math.floor(Math.random() * what.length, what.length);
  const random3 = Math.floor(Math.random() * when.length, when.length);
  let rd1 = who[random1];
  let rd2 = what[random2];
  let rd3 = when[random3];
  let excusa = document.createElement("p");
  excusa.innerHTML = `${rd1} ${rd2}  ${rd3}`;
  let container = document.getElementById("container");
  console.log(container);
  container.append(excusa);

  //console.log("Hello Rigo from the console!");
};
