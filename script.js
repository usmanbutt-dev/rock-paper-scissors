
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let options = [rock, paper, scissors];
let chosen = document.querySelector(".chosen img");

options.forEach(element => {
    element.addEventListener(`click`, ()=>{
            chosen.src = element.src;
    })    
});