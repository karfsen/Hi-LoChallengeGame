function Down() {
  //let win=0;
    PcSwitchCard();

    if(num==card)
  {

      swal({
          title: "You're the lucky one !",
          text: "Try again!",
          button: "^_^",
      });
    setTimeout(changeCard, 1500);

  }
   else if (num > card)
      {
          swal({
              title: "You win!",
              text: "You've earned 1000$!",
              icon: "success",
              button: "Aww yiss!",
          });
          setTimeout(changeCard, 1500);
          moneyInc(1);
      }

      else
      {
          swal({
              title: "You lose!",
              text: "You've lost 1000$!",
              icon: "error",
              button: "Aww nooo!",
          });
          setTimeout(changeCard, 1500);
          moneyInc(0);

      }
    checkLose();
    num=card;

}
