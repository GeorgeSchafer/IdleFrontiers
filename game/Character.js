import Fraction from './mechanism/Fraction.js'

class Character {

    constructor(string){

        this.name = string;
        this.hpt = new Fraction();
        this.atk = 0;
        this.def = 0;
        this.exp = new Fraction();
        this.job = new Job();

    }

    attack( character ){
        
    }
    
}

class Job {
    constructor(){
        this.str = false;
        this.dex = false;
        this.wis = false;
    }

    setStr(){
        this.str = true;
        this.dex = false;
        this.wis = false;
    }

    setDex(){
        this.str = false;
        this.dex = true;
        this.wis = false;
    }

    setWis(){
        this.str = false;
        this.dex = false;
        this.wis = true;
    }

    toString(){
        if(this.dex){ return "rogue" }
        else if(this.str) { return "warrior" }
        else if(this.wis) { return "wizard" }
    }
}

class PlayerCharacter extends Character {

    constructor(string){
        super(string);
        this.hpt = new Fraction(128,true);
        this.atk = 3;
        this.def = 3;
        this.dex = 1;
        this.str = 1;
        this.wis = 1;
        this.job.setStr();
    }
    
}

class Sidekick extends Character {
    constructor(string){
        super(string);
        this.hpt = new Fraction(16,true);
        this.atk = 16;
        this.def = 8;
        this.job.setStr();
    }

    buff( character ){
    }
}

class Beast extends Character {
    constructor(string){
        super(string);
        this.hpt = new Fraction(8,true);
        this.atk = 8;
        this.def = 4;
        this.exp = 1;
        this.job.setStr();
    }
}



export { PlayerCharacter, Sidekick, Beast };