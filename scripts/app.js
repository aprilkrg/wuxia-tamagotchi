console.log("grandmaster of monstrous cultivation");
/**
 * 
 * //  ===  !  objects & classes below  !  ===  //
 * 
 */
/**
 * Create a cultivator
 * @param {string} name - The name of this cultivator
 * @param {string} sect - The sect this cultivator belongs to
 * @param {boolean} goldenCore - A cultivator has a goldenCore by default
 * @param {number} trainingLevel - The power level of this cultivator starts at 1 if goldenCore = true, will increment up to 10 - a riff off of age
 * @param {number} boredom - The interest level of this cultivator, 0 being interested, 10 being distracted
 * @param {number} hunger - The hunger level of this cultivator, 0 being not hungry, 10 being ravenous
 * @param {number} sleep - The energy level of this cultivator, 10 being rested, 0 being exhausted
 */
class Cultivator {
    // === ! Constructor ! === //
    constructor(name) {
        this.name = name;
        // === ! Attributes ! === //
        this.sect = "Yunmeng Jiang";
        this.trainingLevel = 1;
        this.goldenCore = true;
        this.boredom = 0;
        this.hunger = 0;
        this.sleep = 10;
    }
    // === ! Methods ! === //
    sayHello() {
        return `I am ${this.name} from ${this.sect} Sect`;
    }
    displayCultivator() {
        /** data preparation */
        let $name = $("input").val();
        // console.log($name, 'this is he jquery name')
        /**jQuery DOM manipulation */
        $("input").remove();
        $("#display").remove();
        $(".name").html(`name: ${$name}`);
        /**printing the data */
        for(const [key, value] of Object.entries(this)) {
            let $metricInfo = $(`<li>${key}: ${value}</li>`).addClass(`metric ${key}`);
            $(".metrics").append($metricInfo);
        };
        $(".increaseTrainingLevel").remove();
        $(".increaseBoredomLevel").remove();
        $(".increaseHungerLevel").remove();
        $(".increaseSleepLevel").remove();
        $(".clickBoredomLevel").remove();
        $(".clickHungerLevel").remove();
        $(".clickSleepLevel").remove();
    }

    increaseTrainingLevel = () => {
        // console.log("clicked");
        this.trainingLevel += 1;
        // console.log(this.trainingLevel, 'training level');
        $(".trainingLevel").text(`trainingLevel: ${this.trainingLevel}`);
    }
    increaseBoredomLevel = () => {
        // console.log("clicked");
        this.boredom += 1;
        // console.log(this.trainingLevel, 'training level');
        $(".boredom").text(`boredom: ${this.boredom}`);
    }
    increaseHungerLevel = () => {
        // console.log("clicked");
        this.hunger += 1;
        // console.log(this.hunger, 'hunger level');
        $(".hunger").text(`hunger: ${this.hunger}`);
    }
    increaseSleepLevel = () => {
        // console.log("clicked");
        this.sleep -= 1;
        // console.log(this.sleep, 'sleep level');
        $(".sleep").text(`sleep: ${this.sleep}`);
    }
    clickBoredomLevel = () => {
        // console.log("clicked");
        this.boredom -= 1;
        // console.log(this.trainingLevel, 'training level');
        $(".boredom").text(`boredom: ${this.boredom}`);
    }
    clickHungerLevel = () => {
        // console.log("clicked");
        this.hunger -= 1;
        // console.log(this.hunger, 'hunger level');
        $(".hunger").text(`hunger: ${this.hunger}`);
    }
    clickSleepLevel = () => {
        // console.log("clicked");
        this.sleep += 1;
        // console.log(this.sleep, 'sleep level');
        $(".sleep").text(`sleep: ${this.sleep}`);
    }

    decrementMetrics() {
        /**
         * instead of going further into the automatic decreasing of metric values, I want to work on getting a button that will increase the value shown on the cultivator display
         */
        // console.log(this.trainingLevel, 'training level')
        // if (this.boredom > 10) {
        //      this.boredom += 1;
        //     }
        // if (this.hunger > 10) {
        //      this.hunger += 1;
        //     }
        // if (this.sleep < 0) {
        //      this.sleep -= 1;
        //     }
        console.log(this.boredom, 'boredom level');
        console.log(this.hunger, 'hunger level');
        console.log(this.sleep, 'sleep level');

    }

};

/**
 * Create a monstrous cultivator
 * @param {string} name - The name of this cultivator
 * @param {string} sect - The sect this cultivator belongs to
 * @param {boolean} goldenCore - A monstrous cultivator does not have a goldenCore by default
 * @param {number} boredom - The interest level of this cultivator, 0 being interested, 10 being distracted
 * @param {number} hunger - The hunger level of this cultivator, 0 being not hungry, 10 being ravenous
 * @param {number} sleep - The energy level of this cultivator, 10 being rested, 0 being exhausted
 * @param {string} title - The title this monstrous cultivator is known by
 * @param {number} publicAnimosityLevel - The public approval rating of this monstrous cultivator, 0 being accepted, 10 being persecuted
 * @param {number} craftinessLevel - The power level of this monstrous cultivator, starts at 0, increments up to 10 - a riff off of age
 */
class MonstrousCultivator extends Cultivator {
    // === ! Constructor ! === //
    constructor(name, sect, goldenCore, hunger, sleep) {
        super(name, sect, goldenCore, hunger, sleep);
        this.name = name;
        this.sect = "Yunmeng Jiang";
        this.goldenCore = false;
        this.hunger = 5;
        this.sleep = 5;
    // === ! Attributes ! === //
        this.title = "Yiling Laozhu";
        this.publicAnimosityLevel = 0;
        this.craftinessLevel = 0;
        delete this.trainingLevel;
        delete this.boredom;
    }
    getSomeSleep() {
        if (this.sleep < 10) {
            this.sleep += 0.5;
        }
        return `${this.title} rests in the Demon's Rest Palace`;
    }
    stopHunger() {
        if (this.hunger < 10) {
            this.hunger += 0.5;
        }
    }
    defectFromSect() {
        delete this.sect;
        return this;
        // set new value of where he lives = burial mounds cave/ demon subdue palace
    }
    becomePublicEnemy() {
        this.publicAnimosityLevel += 2;
        return this.publicAnimosityLevel;
    }
};
const weiWuxian = new MonstrousCultivator("Wei Ying");

/**
 * 
 * //  ===  !  functions & DOM below  !  ===  //
 * 
 */
/**
 * @summary createGameBoard uses jQuery to create an input box and a submit button.
 */
const createGameBoard = function() {
    const $nameInput = $("<input type='text' placeholder='Name your cultivator'></input>");
    $('body').prepend($nameInput);
    const $displayCharacterBtn = $("<button id='display' class='btn'>Display</button>");
    $("body").append($displayCharacterBtn);
    const $nameDiv = $("<div></div>");
    $("body").append($nameDiv);
    const $metricDiv = $("<div></div>").addClass(`cultivator`);
    const $metricUl = $("<ul></ul>").addClass("metrics");
    $("body").append($metricDiv);
    $metricDiv.append($metricUl);

    const $start = $("<button id='start' class='btn'>Start Game</button>");
    $("body").append($start);
    $start.css("visibility", "hidden");

    const $boredom = $("<button id='boredom' class='btn'>Play</button>");
    $metricDiv.append($boredom);
    $boredom.css("visibility", "hidden");
    const $hunger = $("<button id='hunger' class='btn'>Eat</button>");
    $metricDiv.append($hunger);
    $hunger.css("visibility", "hidden");
    const $sleep = $("<button id='sleep' class='btn'>Sleep</button>");
    $metricDiv.append($sleep);
    $sleep.css("visibility", "hidden");
};

/**
 * @var newCharacter is a global variable that will be assigned the values for the created cultivator
 * @function createCharacter will instantiate a new object of the Cultivator class.
 * @function startGame will start the timers and start mutating the metrics
 */
let newCharacter;
const createCharacter = function() {
    const name = $("input").val();
    // console.log(name, 'this is the name')
    newCharacter = new Cultivator(`${name}`);
    newCharacter.displayCultivator();

    const $start = $("#start");
    $start.css("visibility", "visible");
    $(".metrics").append($start);

};
const startGame = function(){
    /** change button visibility */
    const $start = $("#start");
    $start.remove();

    const $boredom = $("#boredom");
    $boredom.css("visibility", "visible");
    $(".cultivator").append($boredom);
    const $hunger = $("#hunger");
    $hunger.css("visibility", "visible");
    $(".cultivator").append($hunger);
    const $sleep = $("#sleep");
    $sleep.css("visibility", "visible");
    $(".cultivator").append($sleep);

    /** interval timers */
    setInterval(function() {newCharacter.increaseTrainingLevel()}, 3000);
    setInterval(function() {newCharacter.increaseBoredomLevel()}, 6000);
    setInterval(function() {newCharacter.increaseHungerLevel()}, 4000);
    setInterval(function() {newCharacter.increaseSleepLevel()}, 8000);

    /** click event listeners */
    // newCharacter.increaseTrainingLevel();
    $("#boredom").on("click", newCharacter.clickBoredomLevel);
    $("#hunger").on("click", newCharacter.clickHungerLevel);
    $("#sleep").on("click", newCharacter.clickSleepLevel);
};

/**
 * 
 * @summary invoked functions and event listeners
 * 
 */
createGameBoard();
$("#display").on("click", createCharacter);
$("#start").on("click", startGame);
