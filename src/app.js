/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = function() {
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
  let whoidex = Math.floor(Math.random() * who.length);
  let actidex = Math.floor(Math.random() * action.length);
  let whatidex = Math.floor(Math.random() * what.length);
  let whenidex = Math.floor(Math.random() * when.length);

  return (
    who[whoidex] +
    " " +
    action[actidex] +
    " " +
    what[whatidex] +
    " " +
    when[whenidex]
  );
};
