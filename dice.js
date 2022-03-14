



let diceRoll = document.querySelector(".diceRoll")
diceRoll.addEventListener("click",roll);
let showdice = document.querySelector(".dice").innerHTML;
let images = [
    "diceSides\dice-six-faces-one.png",
    "diceSides\dice-six-faces-two.png",
    "diceSides\dice-six-faces-three.png",
    "diceSides\dice-six-faces-four.png",
    "diceSides\dice-six-faces-five.png",
    "diceSides\dice-six-faces-six.png"
]
function roll(){
    let dice1 = Math.floor(Math.random()*6)+1; 
    let dice2 = Math.floor(Math.random()*6)+1; 
    console.log(dice1);
    console.log(dice2);
    showdice = (`${dice1}`);
    document.querySelector(".dice1").setAttribute("src","diceSides\\dice-six-faces-six.png")
}



