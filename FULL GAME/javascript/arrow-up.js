$(document).ready(function() {

});
function up() {
    console.log("test");
    PcSwitchCard();
    if (card > num) {
        alert("You win! Try to guess another one!");

        setTimeout(changeCard, 1500);
    }
    else {
        alert("You lose...");
        setTimeout(changeCard, 1500);
    }
}