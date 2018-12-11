$(document).ready(function() {

});
function Down() {
    PcSwitchCard();
   if (num > card) {
          alert("You win! Try to guess another one!");
          setTimeout(changeCard, 1500);
          win=1;
      }
        else {
          alert("You lose...");
          setTimeout(changeCard, 1500);
          win=0;
    }
}
