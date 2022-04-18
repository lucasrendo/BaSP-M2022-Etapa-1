console.log('\n\n-- EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
 "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('\t-Exercise 3.a:');
var arrayA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
console.log('\t' + arrayA[4] + ' y ' + arrayA[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('\n\t-Exercise 3.b:');
var arrayB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
var orderedArray = arrayB.sort();
var monthsAlphabetically = orderedArray.join(', ');
console.log('\t' + monthsAlphabetically);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('\n\t-Exercise 3.c:');
var arrayC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
arrayC.unshift('Elemento inicial');
arrayC.push('Elemento final');
console.log('\t' + arrayC.join(', '));
 
/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('\n\t-Exercise 3.d:');
var arrayD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
arrayD.shift();
arrayD.pop();
console.log('\t' + arrayD.join(', '));

/* e. Invertir el orden del array (utilizar reverse). */

console.log('\n\t-Exercise 3.e:');
var arrayE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
console.log('\t' + arrayE.reverse());

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

console.log('\n\t-Exercise 3.f:');
var arrayF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
console.log('\t' + arrayF.join(' - '));


/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('\n\t-Exercise 3.g:');
var arrayG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
var arrayGCopy = arrayG.slice(4,11);
console.log('\t' + arrayGCopy.join(', '));