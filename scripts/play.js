const startGameFunction = function () {
    console.log("start game function invoked");
    // // ===== START GAME BUTTON ===== //
    Game.gameArr[0].gamePowerBtn();
    console.log("game on:", Game.gameArr[0].gameOn);
	// === ! interval timers for gameplay ! === //
	setInterval(function() {handleTimer()}, 1000);
	setInterval(function() {handleStat()}, 1000);
	// === ! remove start button ! === //
	const startBtn = document.querySelector("#start");
	startBtn.remove();
	// === ! when there is a click, re-render in response to the change ! === //
	render();
};

const changeStat = function (event) {
    console.log("change stat function invoked");
    // === ! stop the click from counting if the gameOn is null ! === //
    if (Game.gameObj.gameOn === null) {
        console.log("the game is off, turn it on before clicking the button");
        return;
    };
    // // ===== STAT LEVEL BUTTONS ===== //
    const statId = event.target.id + "Level";
    Cultivator.cultivatorObj.changeStatLevel(statId);
	// === ! when there is a click, re-render in response to the change ! === //
	render();
};

const handleStat = function() {
	// === ! decrement a value on the cultivatorObj ! === //
	for(let [key, value] of Object.entries(Cultivator.cultivatorObj)) {
		// === ! Only loop through the numbers, and not trainingLevel ! === //
		if(Number.isInteger(value) && key !== "trainingLevel") {
			Cultivator.cultivatorObj[value]--;
			console.log(key, value);
		};
	};
};

const handleTimer = function() {
	// console.log(Game.gameObj.timer, 'timer');
	const timer = document.querySelector("#timer");
	// === ! if timer is null, set it to a number datatype ! === //
	if(Game.gameObj.timer === null) {
		Game.gameObj.timer = 1;
	};
	// === ! set innerHTML ! === //
	timer.innerHTML = Game.gameObj.timer;
	Game.gameObj.timer++;
};

const render = function() {
	console.log("render function invoked");
	// === ! create DOM element variables ! === //
	const playStat = document.querySelector("#playStat");
	const eatStat = document.querySelector("#eatStat");
	const sleepStat = document.querySelector("#sleepStat");
	// === ! set innerHTML ! === //
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
