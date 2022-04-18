console.log('-- EXERCISE 1: VARIABLE AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
 3er variable. */

console.log('\t-Exercise 1.a:');
var num1 = 2;
var num2 = 8;
var sum = num1 + num2;
console.log('\t' + sum);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log('\n\t-Exercise 1.b:');
var firstName = 'Lucas';
var lastName = 'Rendo';
var fullName = firstName + ' ' + lastName;
console.log('\t' + fullName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
 resultado de la suma en una 3er variable (utilizar length). */

console.log('\n\t-Exercise 1.c:');
var string1 = '13 characters';
var string2 = '19 character string';
var stringsLength = string1.length + string2.length;
console.log('\t' + stringsLength);