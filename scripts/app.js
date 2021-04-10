console.log("grandmaster of monstrous cultivation");
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
    trainUprightPath() {
        if (this.goldenCore === true) {
            if (this.trainingLevel < 10 && this.hunger < 6) {
                return this.trainingLevel += 1;
            } else {
                return 'Your cultivator is to hungry to train today.'
            };
        } else return `You have no Golden Core.`
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
    displayCultivator() {
        // let className = "Wei Ying";
        // console.log(className, '<<<<<<<');
        // className.replace(/ /g,'');
        // console.log(className, '>>>>>>>>>>');
        // const $metricDiv = $("<div></div>").addClass(`cultivator ${this.name}`);
        // // ^^^ I want to take the space out of this.name ("Wei Ying") so that I can interpolate the name string into the addClass method below
        const $metricDiv = $("<div></div>").addClass(`cultivator`);
        const $metricUl = $("<ul></ul>").addClass("metrics");
        $("body").append($metricDiv);
        $metricDiv.append($metricUl);
        for(const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`)
            let $metricInfo = $(`<li>${key}: ${value}</li>`).addClass(`metric ${key}`);
            $metricUl.append($metricInfo);
        };
    }
    // updateName() {
    //     const $nameInput = $("<input type='text' placeholder='name'><input type='submit' value='submit'>");
    //     $('body').prepend($nameInput);
    //     const $inputValue = $nameInput.val();
    //     $(".name").text(`${$inputValue}`)
    // }
};

const weiYing = new Cultivator("Wei Ying");

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
        // super(name, sect, goldenCore, hunger, sleep); // what's the point of super, how do I use it?
        // I don't want monstrous cultivators to inheirit boredom or trainingLevel - how?
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

const createGameBoard = function() {
    const $nameInput = $("<input type='text' placeholder='Name your cultivator'><button class='submit__name'>Submit</button>");
    $('body').prepend($nameInput);

};

createGameBoard();

const grabName = function() {
    
    
    $(".submit__name").on("click", function() {
        console.log('click');
        const $name = $("input").val();
        console.log(
            $name
            );
        const $nameDiv = $("<div></div>");
        $("body").append($nameDiv);
        $nameDiv.append($name);

    });
};

grabName();