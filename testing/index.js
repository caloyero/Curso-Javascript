export function sum(a, b) {
    return a + b;
  }
 /*  module.exports = sum; */

   ; 
 export function fizzBuzz(number) {
    if (!number) {
        return 'el argumento no puede ser nulo'
    }
    if (number%2==0 && number%3== 0) {
        return 'FizzBuzz'
    }else if(number%2== 0)
    {
        return 'Fizz';
    }else if(number%3 == 0)
    {
        return 'Buzz'
    }else{
        return 'not Fizz and not Buzz'
    }
    
 }
  /* module.exports = fizzBuzz; */

 console.log(fizzBuzz(8));

 /*  let ciudad = '';
 function ciudadDeNacimiento(ciudad){
     if (ciudad == 'bogota'|| ciudad == 'cali' || ciudad == 'medellin' ) {
        return 'usted es colombiano'
     }else{
        return 'no es colombiano'
     }
 }
 

  module.exports = ciudadDeNacimiento;
 console.log(ciudadDeNacimiento('cali'))  */