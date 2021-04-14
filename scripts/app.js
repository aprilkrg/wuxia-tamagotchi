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
        this.trainingLevel = 0;
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
        this.trainingLevel += 1;
        $(".trainingLevel").text(`trainingLevel: ${this.trainingLevel}`);
    }
    increaseBoredomLevel = () => {
        if (this.boredom < 10) {
            this.boredom += 1;
        };
        $(".boredom").text(`boredom: ${this.boredom}`);
    }
    increaseHungerLevel = () => {
        if (this.hunger < 10) {
            this.hunger += 1;
        };
        $(".hunger").text(`hunger: ${this.hunger}`);
    }
    increaseSleepLevel = () => {
        if (this.sleep > 0) {
            this.sleep -= 1;
        };
        $(".sleep").text(`sleep: ${this.sleep}`);
    }
    clickBoredomLevel = () => {
        this.boredom -= 1;
        $(".boredom").text(`boredom: ${this.boredom}`);
    }
    clickHungerLevel = () => {
        this.hunger -= 1;
        $(".hunger").text(`hunger: ${this.hunger}`);
    }
    clickSleepLevel = () => {
        this.sleep += 1;
        $(".sleep").text(`sleep: ${this.sleep}`);
    }
    checkGameEnd() {
        let over = Boolean();
        const $failMessage = $("<h1>You lose</h1>");
        if (this.boredom > 9 || this.hunger > 9) {
            over = true;
        } else if(this.sleep < 1) {
            over = true;
        };
        if (over === true) {
            $(".cultivator").remove();
            $("body").replaceWith($failMessage);
        };
    };
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
    /** beginning display on page */
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
    /** hide buttons */
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
 * @function checkGameEnd will check the metrics on the character, and if they are out of bounds, will end the game
 */
let newCharacter;
const createCharacter = function() {
    /** data creation */
    const name = $("input").val();
    newCharacter = new Cultivator(`${name}`);
    newCharacter.displayCultivator();
    newCharacter.imgUrl = "https://picsum.photos/200";
    console.log(newCharacter, "new character attributes <<<<")
    /** DOM manipulation */
    const $start = $("#start");
    $start.css("visibility", "visible");
    $(".metrics").append($start);
    const $avatar = $(`<img class="img" src=${newCharacter.imgUrl} alt="image of Wei Wuxian, drawn in a chibi style. He looks adorable.">`);
    $("body").prepend($avatar);
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
    setInterval(function() {newCharacter.checkGameEnd()}, 1000);
    /** click event listeners */
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

/**
 * TODO 
 * get a picture!!
 * get 'enter' to submit name input
 * clean up wet code in displayCultivator and in the increase/clickMetricLevel functions
 * 
 * 
 * NOTE 
 * where to go from here?
 * programatically interested in: after a cultivator reaches a certain age, a button appears to morph your cultivator from the upright path to the monstrous path (which will create a new instance of the MonstrousCultivator class)
 */