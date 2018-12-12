//funkcia na pripočítavanie vyhraných peňazí , možno bude treba spraviť jednu pre to , kde bude user zadavať higher a jednu pre lower , ale ešte neviem uvidíme ešte
//let bet=true/false;
//let money=100;

function moneyInc(arg)
{

  //console.log ( "win: "+ arg);

  if(arg===1)
  {

    money*=2;

  }

  else
  {

    money = money-1000;

  }

  document.getElementById("moneyLabel").innerHTML = money;

}
