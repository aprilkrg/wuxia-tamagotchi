const startGameFunction = function () {
    console.log("start game function invoked");
    // // ===== START GAME BUTTON ===== //
    Game.gameArr[0].gamePowerBtn();
    console.log("game on:", Game.gameArr[0].gameOn);
};

const changeStat = function (event) {
    console.log("change stat function invoked");
    // === ! stop the click from counting if the game is off ! === //
    if (Game.gameObj.gameOn === false) {
        console.log("the game is off");
        return;
    }
    console.log(Game.gameArr[0].gameOn); // click before start === null, after true
    console.log(Game.gameObj); // click before start === empty object, after empty {}

    // // ===== STAT LEVEL BUTTONS ===== //
    const statId = event.target.id + "Level";
	console.log(statId, 'stat id')
    //   weiYing.changeStatLevel(statId);
    // weiYing is undefined - can i solve this by adding it as a static variable, like with the Game.gameArr?
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("play.js loaded");
    // === ! create DOM element variables ! === //
    const startBtn = document.querySelector("#start");
    const statBtns = document.querySelectorAll(".stat");
    // === ! attach event listeners ! === //
    startBtn.addEventListener("click", startGameFunction);
    for (let i = 0; i < statBtns.length; i++) {
        statBtns[i].addEventListener("click", changeStat);
    }
});
