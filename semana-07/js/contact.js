// var form = document.getElementById('contact-form');
var fullName = document.getElementById('name');
var email = document.getElementById('email');
var contactArea = document.getElementById('contact-area');
var message = document.getElementById('message');
var submitBtn = document.getElementById('submit')
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

/***********************
 * MODULAR FUNCTIONS
 **********************/

// VALIDATION OF STRINGS
function unsopportedCharacterValidation(string){
    var diffCount = 0;
    var j;
    var standarizedString = string.trim().toLowerCase();
    for(var i = 0; i < standarizedString.length; i++){
        for(j = 0; j < numbers.length; j++){
            if(standarizedString[i] == numbers[j]){
                diffCount = ++diffCount;
            }
        }
        for(j = 0; j < letters.length; j++){
            if(standarizedString[i] == letters[j]){
                diffCount = ++diffCount;
            }
        }
    }
    if(diffCount === standarizedString.length){
        return true
    }
    return false
};

function numberOnlyValidation(num){
    var numsStr = num.toString();
    for(var i = 0; i < letters.length; i++){
        if(numsStr.includes(letters[i])){
            return false
        }
    }
    return unsopportedCharacterValidation(numsStr);
}

function textOnlyValidation(str){
    var standarizedStr = str.toLowerCase().trim();
    for(var i = 0; i < numbers.length; i++){
        if(standarizedStr.includes(numbers[i])){
            return false
        }
    }
    return unsopportedCharacterValidation(standarizedStr);
}

function alphanumericValidation(text){
    text = text.toString();
    if(!textOnlyValidation(text) && !numberOnlyValidation(text) && unsopportedCharacterValidation(text)){
        return true
    }
    return false
};

// ELEMENTS AND STYLING FOR VALIDATION STATUS

function styleSuccess(field){
    field.style.border = '2px solid var(--bright-green)';
}

function styleError(field){
    field.style.border = '2px solid var(--scarlet)';    
}

function resetField(field){
    field.style.border = '1px solid var(--grayish-navy)';
}

/*******************
 * EVENT VALIDATIONS
 ******************/

 function validateFullName(){
    var noSpaceString = fullName.value;
    var status;
    do{
        noSpaceString = noSpaceString.replace(' ', '');
    }while(noSpaceString.includes(' '))
    if(fullName.value === ''){ 
        status = 0;
    }
    else if(
    fullName.value.length >= 4 
    && fullName.value.includes(' ')
    && textOnlyValidation(noSpaceString)
    ){
        styleSuccess(fullName);
        status = 1;
    }
    else {
        styleError(fullName);
        status = -1;
    }
    return status
}

function validateEmail(){
    var status;
    if(email.value === ''){ 
        status = 0;
    }
    else if(emailRegex.test(email.value)){
        styleSuccess(email);
        status = 1;
    }
    else{
        styleError(email);
        status = -1;
    }
    return status
}

function validateMessage(){    
    var status;
    if(message.value === ''){ 
        status = 0;
    }
    else if(message.value.length > 3){
        styleSuccess(message);
        status = 1;
    }
    else{
        styleError(message);
        status = -1;
    }
    return status
}

function validateDropdown(){
    if(contactArea.value === 'Area'){
        alert('Select Area');
        return false
    }
    return true
}

function displayData(e){
    e.preventDefault();
    var errorMessage = '';

    if(validateFullName() === 1){
        styleSuccess(fullName);
    }
    else if(validateFullName() === -1){
        styleError(fullName);
        errorMessage = errorMessage + 'Invalid full name\n';
    }
    else if(validateFullName() === 0){
        styleError(fullName);
        errorMessage = errorMessage + 'full name is required\n';
    };

    if(validateEmail() === 1){
        styleSuccess(email);
        console.log('email success')
    }
    else if(validateEmail() === -1){
        styleError(email);
        errorMessage = errorMessage + 'Invalid Email\n';
    }
    else if(validateEmail() === 0){
        styleError(email);
        errorMessage = errorMessage + 'Email is required\n';
    };

    if(validateMessage() === 1){
        styleSuccess(message);
        console.log('message success')
    }
    else if(validateMessage() === -1){
        styleError(message);
        errorMessage = errorMessage + 'Invalid Message\n';
    }
    else if(validateMessage() === 0){
        styleError(message);
        errorMessage = errorMessage + 'Message is required\n';
    };

    validateDropdown()
    if(errorMessage === '' && validateDropdown()){
        alert('inquiry successfully sent!');
    }
    else{
        alert(errorMessage);
    };

    document.getElementById('contact-form').reset();
}

//EVENTS
window.onload = function(){
document.getElementById('contact-form').reset()
}
fullName.addEventListener('blur', () =>{
    validateFullName(fullName)}
);
fullName.addEventListener('focus', () =>{
    resetField(fullName)}
);
email.addEventListener('blur', validateEmail);
email.addEventListener('focus', () =>{
    resetField(email)}
);
message.addEventListener('blur', validateMessage);
message.addEventListener('focus', () =>{
    resetField(message)}
);
submitBtn.addEventListener('click', displayData);