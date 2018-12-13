//Sasha
let img;
$(document).ready(function() {

});
function PcSwitchCard()
{
    card = randomPcCard();
    card1 = randomPcCardColor();

    switch (card)
    {
        case 1:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML = "<img src=\"assets/images/cards/AC.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/AC.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML = "<img src=\"assets/images/cards/AD.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/AD.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML = "<img src=\"assets/images/cards/AH.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/AH.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML = "<img src=\"assets/images/cards/AS.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/AS.png\" class=\"cardSize\">";
                    break;

                default:
                    text = "No such a value found"
            }
            break;

        case 2:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/2C.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/2C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/2H.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/2H.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/2D.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/2D.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/2S.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/2S.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"

            }
            break;

        case 3:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/3S.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/3S.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/3H.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/3H.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/3D.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/3D.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/3C.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/3C.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 4:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/4C.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/4C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/4D.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/4D.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/4H.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/4H.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/4S.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/4S.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 5:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/5C.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/5C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/5D.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/5D.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/5H.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/5H.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/5S.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/5S.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 6:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/6C.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/6C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/6D.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/6D.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/6H.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/6H.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/6S.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/6S.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 7:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/7C.png\" class=\"cardSize\">";
                    img = "<img src=\"assets/images/cards/7C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/7D.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/7D.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/7H.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/7H.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/7S.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/7S.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 8:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/8C.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/8C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/8H.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/8H.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/8D.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/8D.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/8S.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/8S.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;
        case 9:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/9C.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/9C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/9H.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/9H.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/9D.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/9D.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/9S.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/9S.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 10:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/10C.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/10C.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/10S.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/10S.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/10H.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/10H.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/10D.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/10D.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 11:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/JC.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/JC.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/JD.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/JD.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/JH.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/JH.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/JS.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/JS.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 12:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/QS.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/QS.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/QD.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/QD.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/QH.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/QH.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/QC.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/QC.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;

        case 13:
            switch (card1)
            {
                case 1:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/KS.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/KS.png\" class=\"cardSize\">";
                    break;

                case 2:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/KC.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/KC.png\" class=\"cardSize\">";
                    break;

                case 3:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/KH.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/KH.png\" class=\"cardSize\">";
                    break;

                case 4:
                    document.getElementById("card1").innerHTML="<img src=\"assets/images/cards/KD.png\" class=\"cardSize\">";
                    img ="<img src=\"assets/images/cards/KD.png\" class=\"cardSize\">";
                    break;

                default: text="No such a value found"
            }

            break;
    }
    return card;
}
function changeCard() {
    document.getElementById("card1").innerHTML="<img src=\"assets/images/card_back.jpg\" class=\"cardSize\">"
    document.getElementById("card").innerHTML=img;
}
function twoBackCard(){

    document.getElementById("card1").innerHTML="<img src=\"assets/images/card_back.jpg\" class=\"cardSize\">";
    document.getElementById("card").innerHTML="<img src=\"assets/images/card_back.jpg\" class=\"cardSize\">";

}
