const startGameFunction = function () {
	console.log("start game invoked");
    Game.gameObj.gameStart();
	// === ! when there is a click, re-render in response to the change ! === //
	render();
	playGame();
};

const playGame = function() {
	console.log("play game invoked");
	// === ! interval timers for gameplay ! === //
	timerInterval = setInterval(function() {handleTimer()}, 1000);
	statInterval = setInterval(function() {handleStat()}, 1000);
	setInterval(function() {stopGameFunction()}, 500);
};

const clickStat = function (event) {
    console.log("click stat invoked");
	// === ! invoke game method ! === //
	Game.gameObj.clickStat(event);
	// === ! when there is a click, re-render in response to the change ! === //
	render();
};

const handleStat = function() {
	console.log(Game.gameObj.gameOn, 'is game on?')
	if (Game.gameObj.gameOn === false) return;
	// === ! decrement a value on the cultivatorObj ! === //
	for(let [key, value] of Object.entries(Cultivator.cultivatorObj)) {
		// === ! Only loop through the numbers ! === //
		if(Number.isInteger(value) && value >= 1) {
			// console.log(key, value);
			Cultivator.cultivatorObj[key]--;
			render();
		};
	};
};

const handleTimer = function() {
	// === ! starts game timer ! === //
	Game.gameObj.gameTimer();
};

const stopGameFunction = function() {
	// === ! only turn the game off if it's on ! === //
	if (Game.gameObj.gameOn === false) return;
	// console.log(Game.gameObj.gameOn, 'game on? checking from stop game')
	// === ! check if relevant obj properties are greater than 1, ie. character is still alive ! === //
	if (Cultivator.cultivatorObj.playLevel < 1 || Cultivator.cultivatorObj.eatLevel < 1 || Cultivator.cultivatorObj.sleepLevel < 1) {
		// console.log("stop game function invoked");
		Game.gameObj.gamePowerBtn();
	};
};
const render = function() {
	// console.log("render function invoked");
	// === ! create DOM element variables ! === //
	const playStat = document.querySelector("#playLevel");
	const eatStat = document.querySelector("#eatLevel");
	const sleepStat = document.querySelector("#sleepLevel");
	// === ! change width ! === //
	playStat.style.width = Cultivator.cultivatorObj.playLevel + 'rem';
	eatStat.style.width = Cultivator.cultivatorObj.eatLevel + 'rem';
	sleepStat.style.width = Cultivator.cultivatorObj.sleepLevel + 'rem';
	// === ! set innerHTML ! === //
	playStat.innerHTML = Cultivator.cultivatorObj.playLevel;
	eatStat.innerHTML = Cultivator.cultivatorObj.eatLevel;
	sleepStat.innerHTML = Cultivator.cultivatorObj.sleepLevel;
};

document.addEventListener("DOMContentLoaded", () => {
	console.log("play.js loaded");
	// === ! create global variable for interval clear
	let timerInterval;
	let statInterval;
    // === ! create DOM element variables ! === //
    const startBtn = document.querySelector("#start");
    const statBtns = document.querySelectorAll(".stat");
    // === ! attach event listeners ! === //
    startBtn.addEventListener("click", startGameFunction);
    for (let i = 0; i < statBtns.length; i++) {
		statBtns[i].addEventListener("click", clickStat);
    };
});
