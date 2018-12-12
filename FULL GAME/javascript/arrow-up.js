function up()
{
  let win=0;
    PcSwitchCard();
if (card==num)
    {
        alert("YO LUCKY TRY AGAIN");
        setTimeout(changeCard, 1500);
    }

else if (card > num)
    {
        alert("You win! Try to guess another one!");
        win=1;
        setTimeout(changeCard, 1500);
        moneyInc();
    }
    else
    {
        alert("You lose...");
        setTimeout(changeCard, 1500);
        win=0;
    }
num=card
}
