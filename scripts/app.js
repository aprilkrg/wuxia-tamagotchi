console.log("grandmaster of monstrous cultivation")

// doc strings - how to??
// name, sect : String; goldenCore : Boolean; trainingLevel : Number; 
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
        if (this.trainingLevel < 10) {
            return this.trainingLevel += 1;
        }
    }

    removeCore() {
        if (this.goldenCore !== false) {
            this.goldenCore = false;
        }
        return 'Your Cultivator sacrificed their Golden Core.'
    }

    stopBoredom() {
        if (this.boredom < 10) {
            this.boredom += 1;
        }
        return "Your cultivator is getting bored... I hope they don't make trouble..."
    }

    stopHunger() {
        if (this.hunger < 10) {
            this.hunger += 1;
        }
    }


};

const weiYing = new Cultivator("Wei Ying", "Yunmeng Jiang");










// snippets
// if (trainingLevel > 0) {
//     goldenCore = true;
// }
