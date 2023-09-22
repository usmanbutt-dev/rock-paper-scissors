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

function clickHandler() {
    chosenPlayer.src = this.src;
    game();
}

options.forEach(element => {
    element.addEventListener(`click`, clickHandler)    
});

function scoreCheck() {
    if(increaseP > 5) {
        setTimeout(function () {
            alert('You won!');
          }, 0);
        options.forEach(element => {
            element.removeEventListener("click", clickHandler);
        });
    }
    else if(increaseE > 5) {
        setTimeout(function () {
            alert('You Lost!');
          }, 0);
        options.forEach(element => {
            element.removeEventListener("click", clickHandler);
        });
    }
}

function playerIncrease() {
    scorePlayer.innerHTML = increaseP++;
    scoreCheck();
}

function enemyIncrease() {
    scoreEnemy.innerHTML = increaseE++; 
    scoreCheck();
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
