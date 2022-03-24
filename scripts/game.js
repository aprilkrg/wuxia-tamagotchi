class Game {
    static gameArr = [];
    static gameObj = {};
    // === ! Constructor ! === //
    constructor(name) {
        this.name = name;
        Game.gameObj[name] = {};
        // === ! Attributes ! === //
        this.gameOn = null;
        this.timer = null;
    }
    // === ! Methods ! === //
    gamePowerBtn = () => {
        // === ! toggles the gameOn attribute on or off, returns Boolean ! === //
        if (this.gameOn === null) {
            this.gameOn = true;
        } else {
            this.gameOn = !this.gameOn;
        }
        return this.gameOn;
    };
    gameStart = () => {
        // // ===== START GAME BUTTON ===== //
        Game.gameObj.gamePowerBtn();
        console.log("game on:", Game.gameObj.gameOn);
        // === ! remove start button ! === //
        const startBtn = document.querySelector("#start");
        startBtn.remove();

        const avatar = document.querySelector(".bounce-5")
        avatar.style.display = "flex"
        console.log(avatar, "AVATAR");
        // const avatar = document.createElement("image");
        // avatar.src = ("./images/chibi-cultivator.png");
        // const msgEl = document.querySelector("#message");
        // msgEl.append(avatar);
    };
    gameTimer = () => {
        // === ! starts game timer ! === //
        // console.log(Game.gameObj.timer, "GAME timer timer");
        // === ! DOM manipulation ! === //
        const timer = document.querySelector("#timer");
        // === ! if timer is null, set it to a number datatype ! === //
        if (Game.gameObj.timer === null) {
            // === ! start at 0 so the first number that shows on the dom is a 1 ! === //
            Game.gameObj.timer = 0;
        }
        // === ! check for game over condition ! === //
        if (Game.gameObj.gameOn === false) {
            console.log("game off from handle timer");
            clearInterval(timerInterval);
            clearInterval(statInterval);
            const message = document.querySelector("#message");
            message.innerHTML = "GAME OVER";
            return;
        }
        // === ! increment timer on gameObj ! === //
        Game.gameObj.timer++;
        timer.innerHTML = Game.gameObj.timer;
    };
    clickStat = (event) => {
        // === ! stop the click from counting if the gameOn is null ! === //
        if (Game.gameObj.gameOn === null) {
            console.log(
                "the game is off, turn it on before clicking the button"
            );
            return;
        }
        // === ! stop the click from counting if the gameOn is false ! === //
        if (Game.gameObj.gameOn === false) {
            const statBtns = document.querySelectorAll(".stat");
            for (let i = 0; i < statBtns.length; i++) {
                statBtns[i].classList.remove("stat");
            }
            return;
        }
        // // ===== STAT LEVEL BUTTONS ===== //
        const statId = event.target.id + "Level";
        Cultivator.cultivatorObj.changeStatLevel(statId);
    };
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("game.js loaded");
    // === ! create new instance on document load ! === //
    const game = new Game("first-game");
    // === ! add new game to static Game variables ! === //
    Game.gameArr.push(game);
    Game.gameObj = game;
    console.log(Game.gameObj, "class obj");
    // return game;
});
