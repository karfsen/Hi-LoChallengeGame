
function checkLose()
{

    if ( money===0)

    {

        swal({
            title: "Game over!",
            text: "You've lost all you’re money! (click on restart button)",
            icon: "warning",
            button: "End game!",
        });

      document.getElementById("down").disabled = true;
      document.getElementById("up").disabled = true;

    }

}
