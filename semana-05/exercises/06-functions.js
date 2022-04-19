console.log('\n\n-- EXERCISE 6: FUNCTIONS');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('\n\t-exercise 6.a:');
function sum(num1, num2){
    return num1+num2
}

var result = sum(1,1);
console.log('\t' + result); 

/*b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('\n\t-exercise 6.b:');
function sumValidated(num1, num2){
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return num1+num2
    }
    else{
        alert('One of the inputs is not a valid number');
        return Number.NaN
    }
}

result = sumValidated(4,'a');
console.log('\t' + result);

/*c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log('\n\t-exercise 6.c:');
function validateInteger(num){
    if(Number.isInteger(num)){
        return true
    }
}

result = validateInteger(4);
console.log('\t' + result);

/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log('\n\t-exercise 6.d:');
function intSumValidated(num1, num2){
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        if(!Number.isInteger(num1) || !Number.isInteger(num2)){
            alert('Input must be integer numbers');
            return Math.round(num1 + num2)
        }
        return num1+num2
    }
    else{
        alert('One of the inputs is not a valid number');
        return Number.NaN
    }
}

result = intSumValidated(3.3,6.6);
console.log('\t' + result);

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/

console.log('\n\t-exercise 6.e:');
function IntConverter(num){
    if(!Number.isInteger(num)){
        alert('Input must be integer number');
        return Math.round(num)
    }
    return num
}

result = sumValidated(IntConverter(3.3),IntConverter(6.6));
console.log('\t' + result);