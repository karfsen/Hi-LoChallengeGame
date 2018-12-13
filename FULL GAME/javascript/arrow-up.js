function up()
{

  //let win=0;

    PcSwitchCard();

if (card==num)
    {
        swal({
            title: "You're the lucky one !",
            text: "Try again!",
            button: "^_^",
        });
        setTimeout(changeCard, 1500);
    }

else if (card > num)
    {
        swal({
            title: "You win!",
            text: "You've earned 1000$!",
            icon: "success",
            button: "Aww yiss!",
        });
        //win=1;
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
        //win=0;
        moneyInc(0);
    }
checkLose();
num=card;

}
