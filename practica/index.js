/* var i = 3
function change(j)
{
    j = 4;
}

change(i)
console.log(i) */

/* let plustra = {
    cities:[
        {name: 'Paris', pop:2},
        {name: 'London', pop:8},
        {name: 'New York', pop:9}
    ]
}
console.log(plustra.cities['Paris']['pop']) */

/* var x ="2",y="10";
alert(x<y) */

//console.log(Math.random(0,10))metodos Math para redondear

/*  */
console.log('numero redondeado con Math.round: 1.4 = '+Math.round(1.4))
//redondea el numero
console.log('numero redondeado con Math.round: 1.5 = '+Math.round(1.5))//redondea el numero
console.log('numero redondeado con Math.ceil: 1.5 = '+Math.ceil(1.1))//redondea el numero desimal
console.log('numero redondeado con Math.floor: 1.5 = '+Math.floor(1.8))//toma el desimal mayor
console.log('nos da la raiz cuadrada de Math.sqrt: 81 = '+Math.sqrt(81))//debuelve raiz cuadrada
console.log('nos permit tener elresultado de potencias Math.pow: 81 = '+Math.pow(3,3))//debuelve la potencia
console.log('nos permit saber si el numero es negativo o positivo Math.sign: = '+Math.sign(-4))//toma el desimal mayor
console.log('nos da un numero aleato entre 0 y 10 Math.random()*10 = '+Math.random()*10)//toma el desimal mayor
console.log('redondeo de randon sin decimales Math.round(Matn.random()*10): = '+Math.round(Math.random()*10))//toma el desimal mayor
console.log('nos permit tener elresultado de  Math.PI: 81 = '+ Math.PI)//toma el desimal mayor


/* Operadores  de cortocircuito */
/* OR = ||  cuando el vlor de la izquierda es valido se muesra dicho valor de 
lo contrario se muestra el de la derecha */

function saludar(nombreDeSaludo)
{
    nombreDeSaludo=nombreDeSaludo|| 'nombre desconocido'
    console.log('Hola ' + nombreDeSaludo)
}
saludar('Omar');// valida el valor de la Izquierda
saludar();// valida el valor de la derecha

/*  corto circuito con AND = && */
/* cuando  el valor de la izquierda el falso valida el de la derecha */

function saludar2(nombreDeSaludo)
{
    nombreDeSaludo=nombreDeSaludo&& 'invaida el valor de la izqierda'
    console.log('Hola ' + nombreDeSaludo)
}
saludar2('Omar');// invalida el valor de la Izquierda
saludar2();// invalida el valor de la derecha


/* Ejercicios de Logica en JavaScript 3 */

/* 9) Programa una funci??n que obtenga un numero aleatorio entre 501 y 600.*/


function numeroAleatorio()
{
    const respuesta = Math.round(Math.random()*(600 - 501)+ 501);
    //primero se pone el numero mayor=600 y luego el menor 501 y lurgo se suma  por el mayor 
    //de esta manera se pone un rango 
    console.log(respuesta)
}
numeroAleatorio();

/* 10) Programa una funci??n que reciba un n??mero y eval??e si es capic??a o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolver?? true. */

const preguntaNumero = 0;

function capicua(preguntaNumero)
{
    let filtro1=preguntaNumero.toString().split('').reverse().join('');
    //e metodo toString() convierte el numero en string
    //el metedo .split('') lo convierte en un arrays
    // el metodo .reverse() invierte el arrays
    //el metodo join() une los elementos del arrays en uno
    let result =Number.parseInt(filtro1)
    // la clase Number con su metodo .parseInt() convierte el string en numero
    console.log(result);
    if(preguntaNumero === result)// eltripe === nos da la comparacion de valor y tipo de dato
    {
        console.log(" el numero es capicua:  "+ result)
    }else{
        console.log("el numero no es capicua:  "+ result)
    }

    
}

capicua(2002)
capicua(2001)
console.clear();
/* 11) Programa una funci??n que calcule el factorial de un n??mero (El factorial de un entero positivo n, se define como el producto de todos los n??meros enteros positivos desde 1 hasta n), pe. miFuncion(5) devolver?? 120. */

let n =0
function factorial(n)
{
    let primerResultado =n// creo la variable para guardar el primer valor
    for (let i = n; i >  0;i --)//creamos un for de manera decendiente
    {
        if(i < n)// creamos un condicional si i es monor que n
        {
            let filtro1 =n*i;//creo una variable filtro1 para crear la primera multiplicacion
            n=filtro1;// creo una guardo en n el valor del multlipo
            //console.log(i)
            //console.log("result: " +n)
        }
    }
    console.log("El factorial de :" + primerResultado + "  es: " + n)

}

factorial(1)
factorial(2)
factorial(3)
factorial(4)
factorial(5)
factorial(6)
factorial(7)
factorial(8)
factorial(9)
factorial(10)


/* pregunta de entrevista javascript */

function calcularNumero(arrays1)
{

    let numeroMayor= 0;
    let numeroMenor= 0;
    
    for(let i = 0; i<arrays1.length; i ++)
    {
         if(arrays1[i]<numeroMenor)
        {
            numeroMenor = arrays1[i];
        };
         if(arrays1[i]>numeroMayor)
        {
            numeroMayor = arrays1[i];
        } 
       
        
    }
    let sumaDeValores = numeroMayor + numeroMenor;
    console.log('consulta de numero mayor: '+ numeroMayor);
    console.log('numero menor: '+numeroMenor); 
    console.log('la suma del numero mayor y el numero menor es: '+sumaDeValores)
}
let arraysDeNumeros =[1,-1,-2,-3,4,5,6,7,8]

calcularNumero(arraysDeNumeros);


/* 
12) Programa una funci??n que determine si un n??mero es primo
 (aquel que solo es divisible por s?? mismo y 1) o no, pe. miFuncion(7) devolver?? true. */

 function numerosPrimos(n)
 { 
    let elNumeroEsPrimo= false;
     if(n%2 ===0)
     {
        elNumeroEsPrimo = true;
     }
     console.log(elNumeroEsPrimo)
 }

 numerosPrimos(2)

/* 13) Programa una funci??n que determine si un n??mero es par o impar, pe. miFuncion(29) devolver?? Impar. */
let n2 =0;
function calcularSiEsPar(n2)
{
    let valorAEvaluar=0;
    for (let i = 0; i <= n2; i = i + 2)
    {
    
        valorAEvaluar = i;
    }
    if(valorAEvaluar === n2)
    {
        console.log('El Numero '+n2+' Es Par')
    }else{
        console.log('El Numero '+n2+' No Es Par')
    }
}


calcularSiEsPar(10);
calcularSiEsPar(29);


/* 14) Programa una funci??n para convertir grados Celsius a Fahrenheit y viceversa,
 pe. miFuncion(0,"C") devolver?? 32??F. */

 let val = 0,val2 = 0;
function convertirgradosF(val)
{
     result = (val*9/5) + 32;
     console.log('Los Grados Celsius a Fahrenheit es: '+result);
}

function convertirgradosC(val2)
{
     result = Math.round((val2 - 32)*5/9);
     console.log('Los Grados  Fahrenheit a Celsius es: '+result);
}

convertirgradosF(4)
convertirgradosC(39.2)

/*  15) Programa una funci??n para convertir n??meros de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolver?? 4 base 10.
*/

const quince = (num, base) => {
	if (!num || !base)
		return console.log('no ingresaste un numero o la base amigx');
	if (typeof num !== 'number') return console.log(`${num} no es un numero`);
	if (typeof base !== 'number') return console.log(`${base} no es un numero`);
    let numABinario = num.toString(2);
	let binarioADecimal = parseInt(numABinario, 10);

	if (base === 2) {
		console.log(
			`el numero ${num} esta en decimal, en binario seria ${numABinario}`
		);
	} else if (base === 10) {
		console.log(
			`el numero ${num} esta en base binaria,en decimal seria ${binarioADecimal}`
		);
	} else {
		console.warn(
			`no permitimos las bases que no sean 2 o 10, por lo tanto,no aceptamos la base ${base}`
		);
	}
};
quince(3, 2);

/* 16) Programa una funci??n que devuelva el monto final despu??s de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolver?? 800.
 */
console.clear();
let valIncial = 0, valDescuento = 0;


function calculardescuento(valIncial, valDescuento)
{
     let valorFinal =valIncial-(valDescuento*10);
     console.log(valorFinal);
}

calculardescuento(1000,10)

/*17) Programa una funci??n que dada una fecha v??lida determine cuantos a??os han pasado hasta el d??a de hoy,
 pe. miFuncion(new Date(1984,4,23)) devolver?? 35 a??os (en 2020).
  */

 let a??o = 0,mes=0,dia=0;

 function calcularFecha(a??o,mes,dia)
 {
     let fechaA??o = 2023,fechaMes=3,fechaDia=4,cantidaA??os =0;
     cantidaA??os = fechaA??o-a??o;
     
     if( mes <fechaMes)
     {
        cantidaA??os = fechaA??o-a??o -1;
        console.log(cantidaA??os)

     }
     else if(  mes <= fechaMes )
     {
        cantidaA??os = fechaA??o-a??o ;
        console.log(cantidaA??os)
     }else
     {
        cantidaA??os = fechaA??o-a??o -1;
        console.log(cantidaA??os)
     }
    
     

     
 }

 calcularFecha(1985,4,9)