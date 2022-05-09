let money = 100;

let diceRollH = document.querySelector(".diceRollH")
diceRollH.addEventListener("click",rollH);
let images = [
    "diceSides\\dice-six-faces-one.png",
    "diceSides\\dice-six-faces-two.png",
    "diceSides\\dice-six-faces-three.png",
    "diceSides\\dice-six-faces-four.png",
    "diceSides\\dice-six-faces-five.png",
    "diceSides\\dice-six-faces-six.png"
]
function rollH(){
    let dice1 = Math.floor(Math.random()*6)+1; 
    let dice2 = Math.floor(Math.random()*6)+1; 
    console.log(dice1);
    console.log(dice2);
    
    document.querySelector(".dice1").setAttribute("src",images[dice1-1])
    document.querySelector(".dice2").setAttribute("src",images[dice2-1])
    let score = dice1 + dice2;
    document.querySelector(".textBelow").innerHTML = `You got ${score} points!`
     if (score > 7) {
        money *= 2;
    } else {
        money /= 2;
    } 
    let moneyText = document.querySelector(".moneyText").innerHTML = `Money: ${money}$`
}
let diceRollL = document.querySelector(".diceRollL")
diceRollL.addEventListener("click",rollL);
function rollL(){
    let dice1 = Math.floor(Math.random()*6)+1; 
    let dice2 = Math.floor(Math.random()*6)+1; 
    console.log(dice1);
    console.log(dice2);
    
    document.querySelector(".dice1").setAttribute("src",images[dice1-1])
    document.querySelector(".dice2").setAttribute("src",images[dice2-1])
    let score = dice1 + dice2;
    document.querySelector(".textBelow").innerHTML = `You got ${score} points!`
     if (score < 7) {
        money *= 2;
    } else {
        money /= 2;
    } 
    let moneyText = document.querySelector(".moneyText").innerHTML = `Money: ${money}$`
}

