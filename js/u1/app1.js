// A constant kelvin temp
const kelvin = 293;

//converting kelvin to celsius
var celsius = kelvin -273;

//celsius to fahrenheit
var fahrenheit = celsius*(9/5) + 32;

// rounding off
fahrenheit = Math.floor(fahrenheit);

// printing
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// 11th
var nKelvin = 0;
var nC = nKelvin - 273;
var nF =Math.floor(32 + nC*9/5);
console.log(nF); 

// 12th
var newton = Math.floor(celsius*33/100);
console.log(newton);