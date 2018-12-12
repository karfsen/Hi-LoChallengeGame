function Down() {
  let win=0;
    PcSwitchCard();
    if(num==card)
  {
    alert("YO LUCKY TRY AGAIN");
    setTimeout(changeCard, 1500);
  }
   else if (num > card)
      {
          alert("You win! Try to guess another one!");
          setTimeout(changeCard, 1500);
          win=1;
          moneyInc();
      }
      else
      {
          alert("You lose...");
          setTimeout(changeCard, 1500);
          win=0;

      }
    num=card;

}
