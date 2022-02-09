const startGameFunction = function() {
    console.log("start game function invoked")
    // // ===== START GAME BUTTON ===== //
    Game.gameArr[0].gamePowerBtn()
    console.log("game on:", Game.gameArr[0].gameOn)
    // // ===== STAT LEVEL BUTTONS ===== //
    // const buttons = document.getElementById("statBtn__board");
    // // // problem with adding event listener this way: a user could click outside of the button but inside the #statBtn__board section, which will give a string that won't be useful later
    // buttons.addEventListener("click", changeStat);
    // function changeStat(event) {
    //     const statId = event.target.id + "Level";
    //     // console.log(statId, 'statid')
    //     // console.log(weiYing[statId], 'statId value')
    //     // const statToChange = weiYing[statId];
    //     weiYing.changeStatLevel(statId)
    // };
}

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




document.addEventListener("DOMContentLoaded", () => {
    console.log("play.js loaded");
    // === ! create DOM element variables ! === //
    const startBtn = document.querySelector("#start");
    // === ! attach event listeners ! === //
    startBtn.addEventListener("click", startGameFunction);
});