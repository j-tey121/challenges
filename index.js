//CHALLGENGE NUMBER ONE
let message = "There is no war in Ba Sing Se";
console.log(message.length);
//CHALLGENGE NUMBER TWO
let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];
for (let i = 0; i < countries.length; i++) {
  console.log("The capital of " + countries[i] + "is " + capital[i]);
}
//CHALLENGE NUMBER THREE
function ran() {
  let randomizer = Math.floor(Math.random() * 3);
  if (randomizer == 0) {
    return "a certain victory";
  }
  if (randomizer == 1) {
    return "not so certain victory";
  }
  if (randomizer == 2) {
    return "an unease victory";
  } else {
    return "Your fate in unclear, ô chosen undead";
  }
}
let month = prompt("what month are u in, write it in lowercase");

switch (true) {
  case month == "december" || month == "january" || month == "february":
    console.log("its winter zzzz");
    break;

  case month == "march" || month == "april" || month == "may":
    console.log("ring ring its the spring");
    break;
  case month == "june" || month == "july" || month == "august":
    console.log("summeeerrrrrrrrrrr");
    break;
  case month == "september" || month == "october" || month == "november":
    console.log("Autumn we go");
    break;
  default:
    alert("u didnt write it in lowercase");

    break;
}
console.log(ran());
 