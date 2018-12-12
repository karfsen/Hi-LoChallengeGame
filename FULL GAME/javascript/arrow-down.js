function Down() {
  let win=0;
    PcSwitchCard();
    if(num==card)
  {
    alert("YOU LUCKY TRY AGAIN");
    setTimeout(changeCard, 1500);
  }
   else if (num > card)
      {
          alert("You win! Try to guess another one!");
          setTimeout(changeCard, 1500);
          moneyInc(1);
      }
      else
      {
          alert("You lose...");
          setTimeout(changeCard, 1500);
          moneyInc(0);

      }
    num=card;

}
