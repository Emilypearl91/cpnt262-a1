//manipulate css using js
//render from html into js
let textColor = document.querySelector('#textColorOne','#textColorTwo','#textColorThree');
//console log to check 
console.log(textColor);
//change color of h3
document.getElementById('textColor').style.backgroundColor = 'orange';
//could not fix bug

//rendering cards
let card = ['#cardOne','#cardTwo','cardThree'];
//log to check
console.log(card);

//toggle one
let nav = document.querySelectorAll('.navigation');

console.log(nav);

nav.forEach('navigation')
  nav.addEventListener('onclick')
    if (nav = true)
      document.getElementById('navigation').style.backgroundColor = 'blue';
    
    else if (nav = false)
    document.getElementById('navigation').style.backgroundColor = 'black';
