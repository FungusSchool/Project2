let money = 100;
let energy = 100;
let diceRollH = document.querySelector(".diceRollH");
diceRollH.addEventListener("click", rollH);
let images = [
  "diceSides\\dice-six-faces-one.png",
  "diceSides\\dice-six-faces-two.png",
  "diceSides\\dice-six-faces-three.png",
  "diceSides\\dice-six-faces-four.png",
  "diceSides\\dice-six-faces-five.png",
  "diceSides\\dice-six-faces-six.png",
];
function rollH() {
  if (energy > 0) {
    energy -= 10;

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".dice1").setAttribute("src", images[dice1 - 1]);
    document.querySelector(".dice2").setAttribute("src", images[dice2 - 1]);
    let score = dice1 + dice2;
    document.querySelector(".textBelow").innerHTML = `You got ${score} points!`;
    if (score > 7) {
      money *= 2;
    } else if (score == 7) {
    } else {
      money /= 2;
    }
    let moneyText = (document.querySelector(
      ".moneyText"
    ).innerHTML = `Money: ${money}$     Energy ${energy}`);
  }
  if (money < 200 && energy < 10) {
    let main = document.querySelector(".main");
    main.classList.add("hidden");
    let lost = document.querySelector(".lost");
    lost.classList.remove("hidden");
  }
}
let diceRollL = document.querySelector(".diceRollL");
diceRollL.addEventListener("click", rollL);
function rollL() {
  if (energy > 0) {
    energy -= 10;

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".dice1").setAttribute("src", images[dice1 - 1]);
    document.querySelector(".dice2").setAttribute("src", images[dice2 - 1]);
    let score = dice1 + dice2;
    document.querySelector(
      ".textBelow"
    ).innerHTML = `You got ${score} points!`;
    if (score < 7) {
      money *= 2;
    } else if (score == 7) {
    } else {
      money /= 2;
    }
    let moneyText = (document.querySelector(
      ".moneyText"
    ).innerHTML = `Money: ${money}$     Energy ${energy}`);
  }
  if (money < 200 && energy < 10) {
    let main = document.querySelector(".main");
    main.classList.add("hidden");
    let lost = document.querySelector(".lost");
    lost.classList.remove("hidden");
  }
}
let buyCoke = document.querySelector(".buyCoke");
buyCoke.addEventListener("click", buy);
function buy() {
  if (money >= 200) {
    money -= 200;
    energy += 100;
    let moneyText = (document.querySelector(
      ".moneyText"
    ).innerHTML = `Money: ${money}$     Energy ${energy}`);
  }
}

