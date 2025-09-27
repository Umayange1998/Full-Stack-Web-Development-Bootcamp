
var randomNumber1 = Math.floor(Math.random()*6)+1
var randomNumber2 = Math.floor(Math.random()*6)+1


var randomImageSource1 = "./images/dice"+randomNumber1+".png";
var randomImageSource2 = "./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

