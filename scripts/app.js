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
        /**jQuery DOM manipulation */
        $("input").remove();
        $("#display").remove();
        $(".name").html(`name: ${$name}`);
        /**printing the data */
        for(const [key, value] of Object.entries(this)) {
            let $metricInfo = $(`<li>${key}: ${value}</li>`).addClass(`metric ${key}`);
            $(".metrics").append($metricInfo);
        };
    }

    removeCore() {
        if (this.goldenCore !== false) {
            this.goldenCore = false;
        };
        return 'Your Cultivator sacrificed their Golden Core.';
    }

    stopBoredom() {
        if (this.boredom < 10) {
            this.boredom += 1;
        };
        return "Your cultivator is getting bored... I hope they don't make trouble...";
    }
    stopHunger() {
        if (this.hunger < 10) {
            this.hunger += 1;
        };
        return `${this.name} is getting hungry, they won't be able to train if the hunger level reaches 5`;
    }
    getSomeSleep() {
        if (this.sleep < 10) {
            this.sleep += 1;
        }
        return `${this.name} got some rest!`;
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
};
createGameBoard();

/**
 * @summary createCharacter will instantiate a new object of the Cultivator class.
 */
const createCharacter = function() {
    const name = $("input").val();
    const newCharacter = new Cultivator(`${name}`);
    newCharacter.displayCultivator();
    const $start = $("#start");
    $start.css("visibility", "visible");
    $(".cultivator").append($start);
    return newCharacter;
};

/**
 * @summary startGame will start the timers and start mutating the metrics
 */
const startGame = function(){
    setInterval(function(){
        console.log('play ball');
    }, 1000);    
};

$("#display").on("click", createCharacter);
$("#start").on("click", startGame);