// var form = document.getElementById('contact-form');
var fullName = document.getElementById('name');
var email = document.getElementById('email');
var contactArea = document.getElementById('contact-area');
var message = document.getElementById('message');
var submitBtn = document.getElementById('submit')
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

function lettersValidation(str){
    var standarizedStr = str.trim().toLowerCase();
    for(var i = 0; i < numbers.length; i++){
        if(standarizedStr.includes(numbers[i])){
            return false
        }
    }
    return true
}

function validateText(field){    
    if(field.value.length > 3 && lettersValidation(field.value)){
        styleSuccess(field);
    }
    else{
        styleError(field);
    }
}

function validateEmail(){
    if(emailRegex.test(email.value)){
        styleSuccess(email);
    }
    else{
        styleError(email);
        return false
    }
}

function validateMessage(){    
    if(message.value.length > 3){
        styleSuccess(message);
    }
    else{
        styleError(message);
    }
}

function validateDropdown(){
    if(contactArea.value === 'Area'){
        alert('Select Area');
    }
}

function styleSuccess(field){
    field.style.border = '2px solid var(--bright-green)';
    field.insertAdjacentHTML('afterend', '<i class="bx bx-check"></i>');
}

function styleError(field){
    field.insertAdjacentHTML('afterend', '<p class="error"></p>');
    var inputTitle = field.previousElementSibling.innerHTML;
    field.nextElementSibling.innerHTML = 'invalid ' + inputTitle;
    field.style.border = '2px solid var(--scarlet)';
}

function resetField(field){
    field.style.border = 'none';
    field.parentElement.lastChild.remove();
}

function displayData(e){
    e.preventDefault();
    validateDropdown()
    document.getElementById('contact-form').reset();
}

//EVENTS
window.onload = function(){
document.getElementById('contact-form').reset()
}
fullName.addEventListener('blur', () =>{
    validateText(fullName)}
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