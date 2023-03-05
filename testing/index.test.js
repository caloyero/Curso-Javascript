/* const fizzBuzz = require('./index');
const sum = require('./index'); */
import fizzBuzz from './index';
import sum from './index';


/* test('adds 1 + 2 to equal 3', () => {
    const suma = sum(1, 2)
  expect(suma).toBe(3);
});
 */


describe('index.text.js', () => {
   describe('FizzBuzz', () => {
    test('resultado FizzBuzz', () => {
      const result = fizzBuzz(6);
      expect(result).toBe('FizzBuzz')
    });
  
    test('resultado Fizz', () => {
      const result = fizzBuzz(4);
      expect(result).toBe('Fizz')
    });
  
    test('resultado Buzz', () => {
      const result = fizzBuzz(3);
      expect(result).toBe('Buzz')
    });
  
    test('resultado error', () => {
      const result = fizzBuzz(5);
      expect(result).toBe('not Fizz and not Buzz')
    });
  
    test('resultado nulo', () => {
      const result = fizzBuzz(null);
      expect(result).toBe('el argumento no puede ser nulo')
    });
 
    /* describe('nacionalidad', ()=>{
      test('nacionalidad verdadera',() =>{
        const result = ciudadDeNacimiento();
        expect(result).toBeTruthy('usted es colombiano')
      })
    }) */
  });

  
 }); 