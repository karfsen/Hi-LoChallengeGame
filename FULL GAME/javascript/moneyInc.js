//funkcia na pripočítavanie vyhraných peňazí , možno bude treba spraviť jednu pre to , kde bude user zadavať higher a jednu pre lower , ale ešte neviem uvidíme ešte
//let bet=true/false;
//let money=100;

function moneyInc()
{let money=1000;

  if((up())==1)
    money=money*2;
  else
  money=0;

  return money;
}
