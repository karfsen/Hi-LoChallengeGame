//funkcia na pripočítavanie vyhraných peňazí , možno bude treba spraviť jednu pre to , kde bude user zadavať higher a jednu pre lower , ale ešte neviem uvidíme ešte
//let bet=true/false;
//let money=100;

let money=100;
function moneyInc()
{

  if((up())==1)
    money=money*2;
  else
  alert("money are at " +money+"$");
  money=0;
}
