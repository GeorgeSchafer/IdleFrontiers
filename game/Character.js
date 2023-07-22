import Fraction from './mechanism/Fraction.js'

class Character {

    constructor(str){

        this.name = str;
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
}

class PlayerCharacter extends Character {

    constructor(str){
        super(str);
        this.hpt = 128;
        this.atk = 3;
        this.def = 3;
        this.dex = 1;
        this.str = 1;
        this.wis = 1;
        this.job.setStr();
    }
    
}

class Sidekick extends Character {
    constructor(str){
        super(str);
        this.hpt = 16;
        this.atk = 1;
        this.def = 1;
        this.job.setStr();
    }

    buff( character ){
    }
}

class Beast extends Character {
    constructor(str){
        super(str);
        this.hpt = 8;
        this.atk = 1;
        this.def = 1;   
        this.exp = 1;
        this.job.setStr();
    }
}



export { PlayerCharacter, Sidekick, Beast };