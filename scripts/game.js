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
    checkPlayerStats = () => {
        
    }
}

const game = new Game();
// console.log(game);