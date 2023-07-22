import PlayerCharacter from './Character.js'
import ReplitDBFunctions from './ReplitDBFunctionsClass.js'

const db = new ReplitDBFunctions();

/*
const enemy = {};
enemy.imp = {
    "name": "imp",
    "hpt": 3,
    "atk": 1,
    "def": 1,
    "exp": 1
};

db.setRecord("enemy", enemy);
*/

export default function main(){
    InitialSetup();
    db.logAllRecords();
}

function InitialSetup(){
    const playerCharacter = new PlayerCharacter();
    playerCharacter.name = "Jade";
    db.setRecord('player', playerCharacter);
}

