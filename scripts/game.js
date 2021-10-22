console.log("game.js loaded")

class Game {
    // === ! Constructor ! === //
    constructor() {

        // === ! Attributes ! === //
        this.gameOn = null;
        this.timer = null;
    }
    // === ! Methods ! === //
    gamePowerBtn = () => {
        // === toggles the gameOn attribute on or off, returns Boolean === //
        if(this.gameOn === null) {
            this.gameOn = true;
        } else {
            this.gameOn = !this.gameOn;
        }
        return this.gameOn;
    }
}

const game = new Game();
// console.log(game);



// console.log("play.js loaded")

// // ===== START GAME BUTTON ===== //
// const startBtn = document.getElementById("start__btn");
// const gameStart = startBtn.addEventListener("click", function() {
//     game.gamePowerBtn();
//     console.log(game.gameOn, "game on status")
//     console.log(game, 'is the timer running')
//     game.timer = setInterval(function(){
//         // game.timer += 1;
//         // console.log(game.timer)
//         console.log("click")
//     }, 1000)
// });

// const stopBtn = document.getElementById("stop__btn");
// stopBtn.addEventListener("click", function(){
//     // console.log(game.timer, 'timer')
//     clearInterval(game.timer)
// })


// // ===== STAT LEVEL BUTTONS ===== //
// const buttons = document.getElementById("statBtn__board");
// // // problem with adding event listener this way: a user could click outside of the button but inside the #statBtn__board section, which will give a string that won't be useful later // //
// buttons.addEventListener("click", changeStat);
// function changeStat(event) {
//     console.log(weiYing)
//     const statId = event.target.id + "Level";
//     weiYing.changeStatLevel(statId)
//     console.log(weiYing)
// };

