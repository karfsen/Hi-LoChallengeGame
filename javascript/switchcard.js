$(document).ready(function() {

});

function switchCard()
{
  console.log("breakpoint");
  num = randomCard();
  switch (num)
  {
    case 1:
    document.getElementById("card").innerHTML="<img src=\"images/1.jpg\" width=\"300\" height=\"500\">";
        break;
    case 2:
    document.getElementById("card").innerHTML="<img src=\"images/2.jpg\" width=\"300\" height=\"500\">";

        break;
    case 3:
    document.getElementById("card").innerHTML="<img src=\"images/3.jpg\" width=\"300\" height=\"500\">";

        break;
    case 4:
    document.getElementById("card").innerHTML="<img src=\"images/4.jpg\" width=\"300\" height=\"500\">";

        break;
    case 5:
    document.getElementById("card").innerHTML="<img src=\"images/5.jpg\" width=\"300\" height=\"500\">";

        break;
    case 6:
    document.getElementById("card").innerHTML="<img src=\"images/6.jpg\" width=\"300\" height=\"500\">";

        break;
    case 7:
    document.getElementById("card").innerHTML="<img src=\"images/7.jpg\" width=\"300\" height=\"500\">";

        break;
    case 8:
    document.getElementById("card").innerHTML="<img src=\"images/8.jpg\" width=\"300\" height=\"500\">";

        break;
    case 9:
    document.getElementById("card").innerHTML="<img src=\"images/9.jpg\" width=\"300\" height=\"500\">";

        break;
    case 10:
    document.getElementById("card").innerHTML="<img src=\"images/10.jpg\" width=\"300\" height=\"500\">";

        break;
    case 11:
    document.getElementById("card").innerHTML="<img src=\"images/11.jpg\" width=\"300\" height=\"500\">";

        break;
    case 12:
    document.getElementById("card").innerHTML="<img src=\"images/12.jpg\" width=\"300\" height=\"500\">";

        break;
    case 13:
    document.getElementById("card").innerHTML="<img src=\"images/13.jpg\" width=\"300\" height=\"500\">";

        break;
    default: text="No such a value found"
  }
}
