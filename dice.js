



// diceRoll.addEventListener("click", roll);
let diceRoll = document.querySelector(".diceRoll")
diceRoll.addEventListener("click",roll);
let showdice = document.querySelector(".dice").innerHTML;
function roll(){
    let dice1 = Math.floor(Math.random()*6)+1; 
    let dice2 = Math.floor(Math.random()*6)+1; 
    console.log(dice1);
    console.log(dice2);
    showdice = (`${dice1}`);
}



