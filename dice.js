
let diceRoll = document.querySelector(".diceRoll")
diceRoll.addEventListener("click",roll);
let images = [
    "diceSides\\dice-six-faces-one.png",
    "diceSides\\dice-six-faces-two.png",
    "diceSides\\dice-six-faces-three.png",
    "diceSides\\dice-six-faces-four.png",
    "diceSides\\dice-six-faces-five.png",
    "diceSides\\dice-six-faces-six.png"
]
function roll(){
    let dice1 = Math.floor(Math.random()*6)+1; 
    let dice2 = Math.floor(Math.random()*6)+1; 
    console.log(dice1);
    console.log(dice2);
    document.querySelector(".dice1").setAttribute("src",images[dice1-1])
    document.querySelector(".dice2").setAttribute("src",images[dice2-1])
    let score = dice1 + dice2;
    document.querySelector(".textBelow").innerHTML = `You got ${score} points!`
}



