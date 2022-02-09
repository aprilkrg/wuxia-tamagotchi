class Cultivator {
    static cultivatorObj = {};
    // === ! Constructor ! === //
    constructor(name) {
        this.name = name;
        // === ! Attributes ! === //
        this.sect = "Yunmeng Jiang";
        this.goldenCore = true;
        this.trainingLevel = 0;
        this.playLevel = 0;
        this.eatLevel = 0;
        this.sleepLevel = 0;
        this.timer;
    }
    // === ! Methods ! === //
    increaseTime() {
        this.timer = setInterval(function () {
            console.log("tick");
        }, 1000);
    }
    changeStatLevel(statToChange) {
        // console.log(statToChange, 'this is the stat passed in')
        // === ! accepts parameter from play function to change stat ! === //
        this[statToChange] += 1;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("cultivator.js loaded");
    // === ! create new instance on document load ! === //
    const weiYing = new Cultivator("Wei Ying");
    // === ! add new character to static variables ! === //
    Cultivator.cultivatorObj = weiYing;
    console.log(Cultivator.cultivatorObj, "class obj");
    // return weiYing;
});
