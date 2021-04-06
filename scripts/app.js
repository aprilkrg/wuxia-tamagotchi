console.log("grandmaster of monstrous cultivation")
/**
 * create a cultivator
 * @param {boolean} goldenCore - A cultivator has a goldenCore by default
 * @param {number} trainingLevel - This cultivator starts at 1 if goldenCore = true, will increment to 10
 * @param {number} boredom - The interest level of this cultivator, 0 being interested, 10 being distracted
 * @param {number} hunger - The hunger level of this cultivator, 0 being not hungry, 10 being ravenous
 * @param {number} sleep - The energy level of this cultivator, 10 being rested, 0 being exhausted
 * @param {string} name - The name of this cultivator
 * @param {string} sect - The sect this cultivator belongs to
 */
class Cultivator {
    // === ! Constructor ! === //
    constructor(name, sect) {
        this.name = name;
        this.sect = sect;
    // === ! Attributes ! === //
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
        // if statement to check golden core status
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
};

const weiYing = new Cultivator("Wei Ying", "Yunmeng Jiang");










// snippets
// if (trainingLevel > 0) {
//     goldenCore = true;
// }
