
class Game {
    static gameArr = []
    static gameObj = {}
    // === ! Constructor ! === //
    constructor(name) {
        this.name = name
        Game.gameObj[name] = {}
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
    checkPlayerStats = () => {
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("game.js loaded")
    // === ! create new instance on document load ! === //
    const game = new Game('newGame');
    Game.gameArr.push(game)
    // console.log(Game.gameObj, Game.gameArr, game);
    // return game;
})