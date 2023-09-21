// add event listsners for the buttons
// when one is pressed
// display it in the player pic
// and choose a random for enemy
// and display it for the enemy
// increase score according to that

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let options = [rock, paper, scissors];
let chosenPlayer = document.querySelector(".chosen #player");
let chosenEnemy = document.querySelector(".chosen #enemy");
let scorePlayer = document.querySelector("#player-score");
let scoreEnemy = document.querySelector("#enemy-score");
let increaseP = 1;
let increaseE = 1;

function playerIncrease() {
    scorePlayer.innerHTML = increaseP++;
}

function enemyIncrease() {
    scoreEnemy.innerHTML = increaseE++; 
}

function game() {
    let selection = Math.floor(Math.random() * 3);
    let enemy = options[selection];
    chosenEnemy.src = enemy.src;

    if(chosenPlayer.src == chosenEnemy.src) {
        
    }
    else if(chosenPlayer.src == rock.src && chosenEnemy.src != paper.src) {
        playerIncrease();
    }
    else if(chosenPlayer.src == paper.src && chosenEnemy.src != scissors.src) {
        playerIncrease();
    }
    else if (chosenPlayer.src == scissors.src && chosenEnemy.src != rock.src) {
        playerIncrease();
    }
    else {
        enemyIncrease();
    }
}

options.forEach(element => {
    element.addEventListener(`click`, ()=>{
            chosenPlayer.src = element.src;
            game();
    })    
});