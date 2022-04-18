console.log('\n\n-- EXERCISE 5: FOR');

/*a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
mostrar una alerta utilizando cada una de las palabras.*/

console.log('\n\t-exercise 5.a:');
var arrayFor = ['elemento 1', 'elemento 2', 'elemento 3', 'elemento 4', 'elemento 5'];
for(var i=0; i<5; i++){
    alert(arrayFor[i]);
};

/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
modificada.*/

console.log('\n\t-exercise 5.b:');
for(var i=0; i<5; i++){
    var firstLetter = arrayFor[i].substring(0,1);
    var rest = arrayFor[i].substring(1);
    alert(firstLetter.toUpperCase() + rest)
};

/*c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
cadena completa.*/

console.log('\n\t-exercise 5.c:');
var sentence = '';
for(var i=0; i<5; i++){
    sentence = sentence + ', ' + arrayFor[i]
};
alert(sentence.substring(2));

/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta
al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('\n\t-exercise 5.d:');
var fillArray = [];
for(var i=0; i<10; i++){
    fillArray[i] = i;
};
console.log(fillArray.join(', '));