const startGameFunction = function () {
    console.log("start game function invoked");
    // // ===== START GAME BUTTON ===== //
    Game.gameArr[0].gamePowerBtn();
    console.log("game on:", Game.gameArr[0].gameOn);
	// === ! remove start button ! === //
	const startBtn = document.querySelector("#start");
	startBtn.remove();
	// === ! when there is a click, re-render in response to the change ! === //
	render();

	if(Game.gameObj.gameOn === true) {
		setInterval(function() {handleTimer()}, 1000);
		setInterval(function() {handleStat()}, 1000);
		setInterval(function() {stopGameFunction()}, 500);
	};

};

const clickStat = function (event) {
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
		// === ! Only loop through the numbers ! === //
		if(Number.isInteger(value) && value >= 1) {
			// console.log(key, value);
			Cultivator.cultivatorObj[key]--;
			render();
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
	// return Game.gameObj.timer;
};

const stopGameFunction = function() {
	// === ! only turn the game off if it's on ! === //
	if (Game.gameObj.gameOn === false) return;
	console.log(Game.gameObj.gameOn, 'game on? from stop game function')
	// === ! check if relevant obj properties are greater than 1, ie. character is still alive ! === //
	if (Cultivator.cultivatorObj.playLevel < 1 || Cultivator.cultivatorObj.eatLevel < 1 || Cultivator.cultivatorObj.sleepLevel < 1) {
		console.log("stop game function invoked");
		console.log(Game.gameObj.gameOn, '<= should be true')
		Game.gameObj.gamePowerBtn();
		console.log(Game.gameObj.gameOn, '<= should be false')
	};
};
const render = function() {
	// console.log("render function invoked");
	// === ! create DOM element variables ! === //
	const playStat = document.querySelector("#playLevel");
	const eatStat = document.querySelector("#eatLevel");
	const sleepStat = document.querySelector("#sleepLevel");
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
		statBtns[i].addEventListener("click", clickStat);
    };
	// === ! interval timers for gameplay ! === //
	if (Game.gameObj.gameOn === false) {
		console.log("game over from the document listener");
	};
});
