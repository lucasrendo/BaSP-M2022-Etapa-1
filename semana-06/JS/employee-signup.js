/*CAMPOS REQUERIDOS
    - Nombre: Solo letras y debe tener más de 3 letras. 
    - Apellido: Solo letras y debe tener más de 3 letras.
    - Email: Debe tener un formato de email válido.
    - DNI: Solo número y debe tener más de 7 números. 
    - Fecha de Nacimiento: Con formato dd/mm/aaaa.
    - Teléfono: Solo número y debe tener 10 números.
    Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
    - Localidad: Texto alfanumérico y debe tener más de 3 letras. 
    - Código Postal: Solo número y debe tener entre 4 y 5 números. 
    - Contraseña: Texto alfanumérico y debe tener más de 7 letras.
    - Repetir Contraseña: Texto alfanumérico y debe tener más de 7 letras.
*/

// function to trim whitespaces when not needed and add whitespace in letters array
// add support for characters like '-' or '.'
/* numbers array should contain numbers and string number should go in new array which should be called characters
and include also letters and characters*/
// Add different messages according to the error
// Change repeat password error text

//VARIABLES
var firstName = document.getElementById('name');
var lastName = document.getElementById('last-name');
var id = document.getElementById('id');
var birth = document.getElementById('birth');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var region = document.getElementById('region');
var zip = document.getElementById('zip');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repeatPass = document.getElementById('repeat-pass');
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

// MODULAR FUNCTIONS
function unsopportedCharacterValidation(str){ //Not working, problem is repeated characters - no solution yet
    var validCharacters = 0;
    var standarizedStr = str.trim().toLowerCase();
    for(var i = 0; i < numbers.length; i++){
        if(standarizedStr.includes(numbers[i])){
            validCharacters = ++validCharacters;
        }
    }
    for(var j = 0; j < letters.length; j++){
        if(standarizedStr.includes(letters[j])){
            validCharacters = ++validCharacters;
        }
    }
    if(validCharacters == standarizedStr.length){
        return true
    }
    return false
};

function numberValidation(num){
    var numsStr = num.toString();
    for(var i = 0; i < letters.length; i++){
        if(numsStr.includes(letters[i])){
            return false
        }
    }
    return true
}

function lettersValidation(str){
    var standarizedStr = str.trim().toLowerCase();
    for(var i = 0; i < numbers.length; i++){
        if(standarizedStr.includes(numbers[i])){
            return false
        }
    }
    return true
}

function alphanumericValidation(str){
    var standarizedStr = str.trim().toLowerCase();
    for(var i = 0; i < letters.length; i++){
        if(standarizedStr.includes(letters[i])){
            for(var j = 0; j < numbers.length; j++){
                if(standarizedStr.includes(numbers[j])){
                    return true
                }
            }
        }
    }
    return false
};

function styleSuccess(fieldSuccess){
    fieldSuccess.style.border = '2px solid var(--bright-green)';
    fieldSuccess.insertAdjacentHTML('afterend', '<i class="bx bx-check"></i>');
}

function styleError(fieldError){
    fieldError.insertAdjacentHTML('afterend', '<p class="error"></p>');
    var inputTitle = fieldError.previousElementSibling.innerHTML
    fieldError.nextElementSibling.innerHTML = 'invalid ' + inputTitle;
    fieldError.style.border = '2px solid var(--scarlet)';
}

function validateText(field){    
    if(field.value.length > 3 && lettersValidation(field.value)){
        styleSuccess(field);
        
    }
    else{
        styleError(field);
        
    }
}

function validateNumber(field, min){
    if(field.value.length > min && numberValidation(field.value)){
        styleSuccess(field);
    }
    else{
        styleError(field);
    }
}

function validateNumberRange(field, min, max){
    if(field.value.length >= min && field.value.length <= max && numberValidation(field.value)){
        styleSuccess(field);
    }
    else{
        styleError(field);
    }
}

function validateAlphanumeric(field, min, both){
    if(both == 'no'){
        if(field.value.length > min){
            styleSuccess(field)
        }
        else{
            styleError(field);
        }
    }
    else{
        if(alphanumericValidation(field.value) && field.value.length > min){
            styleSuccess(field)
        }
        else{
            styleError(field);
        }
    }
}

function resetField(field){
    field.style.border = 'none';
    field.parentElement.lastChild.remove();
}

//EVENT FUNCTIONS

function validateBirth(){
    var currentYear = 2022
    var birthYear = birth.value.slice(0,4);
    if((currentYear - birthYear) < 100 && (currentYear - birthYear) > 17){
        styleSuccess(birth)
    }
    else{
        styleError(birth)
    }   
}

function validateEmail(){
    if(emailRegex.test(email.value)){
        styleSuccess(email);
    }
    else{
        styleError(email);
    }
}

function validateAddress(){
    styleError(address)
}

function validatePassword(){
    if(password.value === repeatPass.value){
        styleSuccess(repeatPass);
    }
    else{
        styleError(repeatPass);
    }
}


//EVENTS
firstName.addEventListener('blur', () =>{
    validateText(firstName)});
firstName.addEventListener('focus', () =>{
    resetField(firstName)});

lastName.addEventListener('blur', () =>{
    validateText(lastName)});
lastName.addEventListener('focus', () =>{
    resetField(lastName)});

id.addEventListener('blur', () =>{
    validateNumber(id, 7)});
id.addEventListener('focus', () =>{
    resetField(id)});

birth.addEventListener('blur', validateBirth); //left for later
birth.addEventListener('focus', () =>{
    resetField(birth)});

phone.addEventListener('blur', () =>{
    validateNumberRange(phone, 10, 10)});
phone.addEventListener('focus', () =>{
    resetField(phone)});

address.addEventListener('blur', validateAddress); //left for later
address.addEventListener('focus', () =>{
    resetField(address)});

region.addEventListener('blur', () =>{
    validateAlphanumeric(region, 3, 'no')});
region.addEventListener('focus', () =>{
    resetField(region)});

zip.addEventListener('blur', () =>{
    validateNumberRange(zip, 4, 5)});
zip.addEventListener('focus', () =>{
    resetField(zip)});

email.addEventListener('blur', validateEmail);
email.addEventListener('focus', () =>{
    resetField(email)});

password.addEventListener('blur', () =>{
    validateAlphanumeric(password, 7)});
password.addEventListener('focus', () =>{
    resetField(password)});

repeatPass.addEventListener('blur', validatePassword);
repeatPass.addEventListener('focus', () =>{
    resetField(repeatPass)});
//submitBtn.addEventListener('click', displayData);