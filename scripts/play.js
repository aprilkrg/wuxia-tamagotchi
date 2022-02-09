const startGameFunction = function () {
    console.log("start game function invoked");
    // // ===== START GAME BUTTON ===== //
    Game.gameArr[0].gamePowerBtn();
    console.log("game on:", Game.gameArr[0].gameOn);
	render();
};

const changeStat = function (event) {
    console.log("change stat function invoked");
    // === ! stop the click from counting if the game is off ! === //
    // if (Game.gameObj.gameOn === false) {
    //     console.log("the game is off");
    //     return;
    // }
    // // ===== STAT LEVEL BUTTONS ===== //
    const statId = event.target.id + "Level";
    Cultivator.cultivatorObj.changeStatLevel(statId);
	render();
};

const render = function() {
	// grab els to display stats
	const playStat = document.querySelector("#playStat");
	const eatStat = document.querySelector("#eatStat");
	const sleepStat = document.querySelector("#sleepStat");
	playStat.innerHTML = Cultivator.cultivatorObj.playLevel;
	eatStat.innerHTML = Cultivator.cultivatorObj.eatLevel;
	sleepStat.innerHTML = Cultivator.cultivatorObj.sleepLevel;
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
    };
});
