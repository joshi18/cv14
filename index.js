var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var a = "dice" + randomNumber1 + ".png";
var b = "images/" + a;
document.querySelectorAll("img")[0].setAttribute("src",b);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var m = "dice" + randomNumber2 + ".png";
var n = "images/" + m;
document.querySelectorAll("img")[1].setAttribute("src",n);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHtml ="Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHtml ="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHtml="Draw!";
}
