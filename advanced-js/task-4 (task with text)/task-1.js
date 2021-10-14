// task 1
"use strict"

let pattern = /\'(\w*)\'/gi;
let someText = "Lore`m ipsu'm 'dolor' 'sit' 'amet', consectetu`r adipiscin'g elit.";
let newText = someText.replace(pattern, '"$1"');
console.log(newText);