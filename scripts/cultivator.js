class Cultivator {
    static cultivatorObj = {};
    // === ! Constructor ! === //
    constructor(name) {
        this.name = name;
        // === ! Attributes ! === //
        this.sect = "Yunmeng Jiang";
        this.goldenCore = true;
        this.trainingLevel = 0;
        this.playLevel = 10;
        this.eatLevel = 10;
        this.sleepLevel = 10;
    }
    // === ! Methods ! === //
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
