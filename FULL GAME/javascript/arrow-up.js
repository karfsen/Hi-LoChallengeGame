$(document).ready(function() {

});
function up()
{
  PcSwitchCard();
    if(card>num){
        moneyInc();
        console.log("money are at " +money+"$");
    }
    else{
        alert('You lose!');
    }
}
