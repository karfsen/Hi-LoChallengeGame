let gameOver = false;

function checkLose()
{

    if ( money===0)

    {

        gameOver = true;
        console.log("END", gameOver);

        swal({
            title: "Game over!",
            text: "You've lost all you’re money! (click on restart button)",
            icon: "warning",
            button: "End Game",
        });



        document.getElementById("down").disabled = true;

        document.getElementById("up").disabled = true;

        gameOver = true;

    }

}
