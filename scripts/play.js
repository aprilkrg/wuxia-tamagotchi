console.log("play.js loaded")

const startBtn = document.getElementById("start__btn");
const gameStart = startBtn.addEventListener("click", function() {
    game.gamePowerBtn();
    console.log(game.gameOn, "game on")
});



// // problem with adding event listener this way: a user could click outside of the button but inside the #statBtn__board section, which will give a string that won't be useful later
const buttons = document.getElementById("statBtn__board");
buttons.addEventListener("click", changeStat);
function changeStat(event) {
    const statId = event.target.id + "Level";
    console.log(statId, 'statid')
    console.log(weiYing[statId], 'statId value')
    // const statToChange = weiYing[statId];
    weiYing.changeStatLevel(statId)
};

