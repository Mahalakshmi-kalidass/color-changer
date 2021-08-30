const SECTION = document.getElementById('container');
const BUTTON = document.getElementById('btn');
//SECTION.style.backgroundColor='rgb('+0+','+0+','+255+')';

function randomNumber(max){
  return Math.floor(Math.random()*max);
}
let color;
function colorChanger(){
  var red = randomNumber(255);
  var green = randomNumber(255);
  var blue = randomNumber(255);
  SECTION.style.backgroundColor='rgb('+red+','+green+','+blue+')';
}

