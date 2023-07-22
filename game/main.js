import {PlayerCharacter, Sidekick, Beast} from './Character.js'
import ReplitDBFunctions from './ReplitDBFunctionsClass.js'

const db = new ReplitDBFunctions();

/*
*/

export default function main(){
    // InitialSetup();
    db.logAllRecords();
}

function InitialSetup(){

    const playerCharacter = new PlayerCharacter('Jade');
    db.setRecord('player', playerCharacter);

    const beastiary = {};
    beastiary.imp = new Beast("imp");
    
    db.setRecord("beastiary", beastiary);

}

