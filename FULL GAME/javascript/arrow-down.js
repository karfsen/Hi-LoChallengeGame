$(document).ready(function() {

});
function Down()
{
  PcSwitchCard();
    if(card<num){
        alert('You win!Try guess next one!');
        moneyInc();
        console.log("money are at " +money+"$");
    }
    else{
        alert('You lose!');
    }
}
