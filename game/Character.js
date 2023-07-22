class Character {

    constructor(){

        this.name = '';
        this.hpt = 0;
        this.atk = 0;
        this.def = 0;
        this.exp = 0;
        this.dex = 1;
        this.str = 1;
        this.wis = 1;
        
    }

    #turn(){}
    
}



export default class PlayerCharacter extends Character {

    constructor(){
        Super();
        this.hpt = 128;
        this.atk = 3;
        this.def = 3;
    }

    #turn(){
        
    }
    
}




