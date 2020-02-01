//Celsius to Fahrenheit
var Celsius = 60;
var Fahrenheit = (Celsius * 9/5) + 32 ;
console.log(`${Celsius}${String.fromCharCode(176)}C is ${Fahrenheit}${String.fromCharCode(176)}F`);

 
//Fahrenheit to Celsius
var fahrenheit = '35';
var celsius = (fahrenheit - 32) * 5/9 ;
console.log(`${fahrenheit}${String.fromCharCode(176)}F is ${celsius.toFixed(2)}${String.fromCharCode(176)}C`);