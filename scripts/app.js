console.log("grandmaster of monstrous cultivation");
/**
 * 
 * //  ===  !  objects & classes below  !  ===  //
 * 
 */
/**
 * Create a cultivator
 * @param {string} Name - The name of this cultivator
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
        // $(".name").html(`name: ${$name}`);
        /**printing the data */
        for(const [key, value] of Object.entries(this)) {
            if(key == "boredom" || key == "hunger" || key == "sleep") {
                let $metricBar = $(`<label for=${key}> ${key}:  </label> <progress class='metric ${key}' max="10" value=${value}></progress><br>`);
                $(".metrics").append($metricBar);
            } else {
                let $metricInfo = $(`<li>${key}: ${value}</li>`).addClass(`metric ${key}`);
                $(".metrics").append($metricInfo);
            };
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
        let $avatar = $(".cultivator__img");
        if (this.trainingLevel >= 5) {
            $avatar.attr("src", "./images/grown-cultivator.png"); 
        };
    }
    increaseBoredomLevel = () => {
        if (this.boredom < 10) {
            this.boredom += 1;
        };
        $(".boredom").text(`boredom: ${this.boredom}`);
        $(".boredom").attr("value", this.boredom);
    }
    increaseHungerLevel = () => {
        if (this.hunger < 10) {
            this.hunger += 1;
        };
        $(".hunger").text(`hunger: ${this.hunger}`);
        $(".hunger").attr("value", this.hunger);
    }
    increaseSleepLevel = () => {
        if (this.sleep > 0) {
            this.sleep -= 1;
        };
        $(".sleep").text(`sleep: ${this.sleep}`);
        $(".sleep").attr("value", this.sleep);
    }
    clickBoredomLevel = () => {
        if (this.boredom > 0) {
            this.boredom -= 1;
        };
        $(".boredom").text(`boredom: ${this.boredom}`);
        $(".boredom").attr("value", this.boredom);
    }
    clickHungerLevel = () => {
        if (this.hunger > 0) {
            this.hunger -= 1;
        };
        $(".hunger").text(`hunger: ${this.hunger}`);
        $(".hunger").attr("value", this.hunger);
    }
    clickSleepLevel = () => {
        if (this.sleep < 10) {
            this.sleep += 1;
        };
        $(".sleep").text(`sleep: ${this.sleep}`);
        $(".sleep").attr("value", this.sleep);
    }
    checkGameEnd() {
        console.log("checking game over?")
        let over = Boolean();
        const $failMessage = $("<h1>You lose</h1>");
        if (this.boredom > 9 || this.hunger > 9) {
            over = true;
        } else if(this.sleep < 1) {
            over = true;
        };
        if (over === true) {
            $(".cultivator").replaceWith($failMessage);
        };
        if (this.trainingLevel > 20) {
            $("button").remove();
            $(".metrics").replaceWith($("<h2>Your cultivator has finished training and is ready to go night hunting!</h2>"))
        }
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
        };
        return `${this.title} rests in the Demon's Rest Palace`;
    }
    stopHunger() {
        if (this.hunger < 10) {
            this.hunger += 0.5;
        };
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
    const $metricDiv = $("<div></div>").addClass(`cultivator`);
    const $metricUl = $("<ul></ul>").addClass("metrics cultivator__ul");
    const $inputDiv = $("<div></div>").addClass("input__div input");
    const $nameInput = $("<input class='input input__textbox' type='text' placeholder='Name your cultivator'></input>");
    // $('.cultivator').prepend($nameInput);
    const $displayCharacterBtn = $("<button id='display' class='input input__btn'>DISPLAY</button>");
    // $(".cultivator").append($displayCharacterBtn);
    $(".cultivator__card").append($inputDiv);
    $(".cultivator__card").append($metricDiv);
    // const $nameDiv = $("<div id='why'></div>");
    // $(".cultivator").append($nameDiv);
    $metricDiv.append($metricUl);
    /** hide buttons */
    const $start = $("<button id='start' class='input cultivator__btn'>Start Game</button>");
    $(".cultivator").append($start);
    $start.css("visibility", "hidden");
    $inputDiv.append($nameInput);
    $inputDiv.append($displayCharacterBtn);
    $("input").keyup(function(event) {
        if (event.originalEvent.code === "Enter") {
            createCharacter();
        }
    });
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
    // newCharacter.imgUrl = "https://picsum.photos/200";
    newCharacter.imgUrl = "./images/chibi-cultivator.png";
    /** DOM manipulation */
    $(".input__div").remove();
    const $start = $("#start");
    $start.css("visibility", "visible");
    // $(".cultivator").append($start);
    const $avatar = $(`<img class="cultivator__img" src=${newCharacter.imgUrl} alt="image of Wei Wuxian, drawn in a chibi style. He looks adorable.">`);
    $(".cultivator").prepend($avatar);
    $(".cultivator").append($start);
};
const startGame = function(){
   /** change button visibility */
    const $start = $("#start");
    $start.remove();
    const $playBtns = $("<section class='interaction'></section>").addClass("play__btns");
    $(".cultivator__ul").addClass("play__metrics");
    $(".cultivator__img").addClass("play__img");

    const $boredom = $("<button id='boredom' class='metrics__btn'>Boredom</button>").addClass("input");
    $boredom.css("visibility", "visible");
   $playBtns.append($boredom);
    const $hunger = $("<button id='hunger' class='metrics__btn'>Eat</button>").addClass("input");
    $hunger.css("visibility", "visible");
   $playBtns.append($hunger);
    const $sleep = $("<button id='sleep' class='metrics__btn'>Sleep</button>").addClass("input");
    $sleep.css("visibility", "visible");
   $playBtns.append($sleep);
   $(".cultivator").append($playBtns);
    /** interval timers */
    setInterval(function() {newCharacter.increaseTrainingLevel()}, 3000);
    setInterval(function() {newCharacter.increaseBoredomLevel()}, 4000);
    setInterval(function() {newCharacter.increaseHungerLevel()}, 2000);
    setInterval(function() {newCharacter.increaseSleepLevel()}, 6000);
    setInterval(function() {newCharacter.checkGameEnd()}, 1000);
    // === !CHANGE INTERVAL TIME FOR TESTING! === //
    // setInterval(function() {newCharacter.checkGameEnd()}, 100000);
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
 * clean up wet code in displayCultivator and in the increase/clickMetricLevel functions
 * progress bars instead of numbers √
 * dear god why did I choose to make all the html elements with jQuery == BIG DUMB
 * 
 * 
 * should there be a game class that has properties that will hold the interval timers for the game?
 
 * 
buttons shouldn't exist until game starts
 * 
 * NOTE 
 * where to go from here?
 * programatically interested in: after a cultivator reaches a certain age, a button appears to morph your cultivator from the upright path to the monstrous path (which will create a new instance of the MonstrousCultivator class)
 */

// $("body").click(function(){
//     console.log("hello")
// }) // WORKS √

// $(".cultivator__card").click(function(){
//     console.log(newCharacter.sayHello())
// }); // WORKS √

// $("img").click(function(){
//     console.log("start")
// }) // won't work