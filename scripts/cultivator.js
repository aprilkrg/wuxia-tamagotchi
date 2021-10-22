console.log("cultivator.js loaded")

class Cultivator {
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
        // console.log(this, 'this in increasetime');
        this.timer = setInterval(function(){
            console.log("tick")
        }, 1000)
    }
    changeStatLevel(statToChange) {
        // console.log(statToChange, 'this is the stat passed in')
        // console.log(weiYing, 'wei ying obj')
        weiYing[statToChange] += 1;
        // console.log(weiYing[statToChange], 'this')

        // get stat id/name from a button click (passing in a string)
        // loop through the keys on the cultivator object and if one matches the string THEN
        // change the cultivator.stat_id value
        // // have to pass in the cultivator and the string from the button click
    }
}
const weiYing = new Cultivator("Wei Ying");
// console.log(weiYing, 'wei ying');
