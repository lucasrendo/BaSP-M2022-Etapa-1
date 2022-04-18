console.log('\n\n-- EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
 toUpperCase). */

console.log('\t-Exercise 2.a:');
var upperCase = 'uppercased string';
console.log('\t' + upperCase.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('\n\t-Exercise 2.b:');
var extract = 'taken from this string';
var extracted = extract.substring(0,5);
console.log('\t' + extracted);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
 caracteres guardando el resultado en una nueva variable (utilizar substring). */

 console.log('\n\t-Exercise 2.c:');
 var extractEnd = 'take from this string the end';
 var extractedEnd = extractEnd.substring(26);
 console.log('\t' + extractedEnd);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
 mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
 toLowerCase y el operador +). */

 console.log('\n\t-Exercise 2.d:');
 var modifyString = 'capitalize first letter';
 var upperCase = modifyString.substring(0,1);
 var lowerCase = modifyString.substring(1);
 var capitalized = upperCase.toUpperCase() + lowerCase;
 console.log('\t' + capitalized);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
 primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

 console.log('\n\t-Exercise 2.e:');
 var whiteSpace = 'look for the first whitespace';
 var whiteSpacePosition1 = whiteSpace.indexOf(' ');
 console.log('\t' + whiteSpacePosition1);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
 Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
 palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
 operador +). */

console.log('\n\t-Exercise 2.f:');
var longWords = 'capitalize everything';
var firstLetter = longWords.substring(0,1);
var whiteSpace = longWords.indexOf(' ');
var lowerCase = longWords.substring(1,whiteSpace);
var capitalizedPhrase = 
    firstLetter.toUpperCase() + lowerCase + ' ' + 
    (firstLetter = longWords.substring(whiteSpace+1,whiteSpace+2)).toUpperCase() +
    (lowerCase = longWords.substring(whiteSpace+2));
console.log('\t' + capitalizedPhrase);

