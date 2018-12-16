//funkcia na pripočítavanie vyhraných peňazí , možno bude treba spraviť jednu pre to , kde bude user zadavať higher a jednu pre lower , ale ešte neviem uvidíme ešte
//let bet=true/false;
//let money=100;

function moneyInc(arg) {

  //console.log ( "win: "+ arg);

  if (arg === 1) {

    money += 1000;

  } else {

    money = money - 1000;

  }

  // funkcia pre score scoreboard
  let storage = window.localStorage; // vraca odkaz na storage
  if (!storage.scoreboard) { // pozrieme sa ci to existuje
    storage.scoreboard = JSON.stringify({}); // v storage spravime prazdny JSON ako text , co spravi prazdu tabulku
  }
  let sb = JSON.parse(storage.scoreboard); // vytvorime premennu sb teda slovnik, do ktorej vlozime JSON (ScoreBoard)
  // sb- slovnik zo scoreboard
  sb[storage.lastname] = money; // do mena priradime peniaze
  storage.scoreboard = JSON.stringify(sb); //toto tu to zmeni na JSON text , a ked to bude vkladat do scoreboard storage
  document.getElementById("moneyLabel").innerHTML = money + "$"; // Martinova funkcia na vklad peniazi do cerveneho policka

}
