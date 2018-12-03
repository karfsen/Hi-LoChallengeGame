$(document).ready(function() {

});
function randomCard()
{
  let num=Math.floor((Math.random() * 12) + 1);
  let a=num;
  while (a==num)
    num=Math.floor((Math.random() * 13) + 1);
  return num;
}

// Sasha
function randomPcCard()
{
    let card=Math.floor((Math.random() * 12) + 1);
    let a=card;
    while (a==card)
        card=Math.floor((Math.random() * 13) + 1);
    return card;
}
