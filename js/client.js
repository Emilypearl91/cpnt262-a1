//manipulate css using js
//render from html into js
let textColor = document.querySelector('#textColorOne','#textColorTwo','#textColorThree');
//console log to check 
console.log(textColor);
//change color of h3
textColor.computedStyleMap.color = 'orange';
//could not fix bug