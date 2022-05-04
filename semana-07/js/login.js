// should validate for unsupported character and trim whitespaces, also validate for empty input
// Change border color to background color in error and success
// Order Elements, they appear in whichever order they are validated
var user = document.getElementById('user');
var password = document.getElementById('password');
var submitBtn = document.querySelector('button[type="submit"]');
var dataContainer = document.getElementById('display-data');
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var loginRequest = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

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

function styleNeutral(field){
    field.style.border = '1px solid var(--grayish-navy)';
}

function styleError(field){
    var inputTitle = field.previousElementSibling.innerHTML;
    field.nextElementSibling.innerHTML = 'invalid ' + inputTitle;
    field.style.border = '2px solid var(--scarlet)';
    field.nextElementSibling.style.display = 'block';
}

function createElement(field, resolution){
    var element = document.createElement('p');
    var inputTitle = field.previousElementSibling.innerHTML;
    switch(resolution){
        case -1:
            element.innerHTML = 'invalid ' + inputTitle;
            element.className = 'error';
            element.id = inputTitle.toLowerCase() + '-result';
            dataContainer.appendChild(element);
            break;
        case 0:
            element.innerHTML = inputTitle + ' required';
            element.className = 'error';
            element.id = inputTitle.toLowerCase() + '-result';
            dataContainer.appendChild(element);
            break;
        case 1:
            element.innerHTML = inputTitle + ': ' + field.value;
            element.id = inputTitle.toLowerCase() + '-result';
            dataContainer.appendChild(element);
            break;
    }
}

function resetField(field){
    // input error message
    field.style.border = 'none';
    field.nextElementSibling.style.display = 'none';
    // submit results
    dataContainer.style.display = 'none';
}

/***********************
 * EVENT FUNCTIONS
 **********************/

function validateUser(){
    var status;
    if(user.value === ''){ 
        styleNeutral(user);
        status = 0;
    }
    else if(emailRegex.test(user.value)){
        styleSuccess(user);
        status = 1;
    }
    else{
        styleError(user);
        status = -1;
    }
    return status
}

function validatePassword(){
    var status;
    if(password.value === ''){ 
        styleNeutral(password);
        status = 0;
    }
    else if(alphanumericValidation(password.value)){
        styleSuccess(password)
        status = 1;
    }
    else{
        styleError(password)
        status = -1;
    }
    return status
}

function displayData(e){
    e.preventDefault();
    dataContainer.innerHTML = '';
    dataContainer.style.display = 'block';
    createElement(user, validateUser());
    createElement(password, validatePassword());

    if(emailRegex.test(user.value) && alphanumericValidation(password.value)){
        fetch(`${loginRequest}?email=${user.value}&password=${password.value}`)
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            if(!json.success){
                alert(`Error: ${json.msg}`);
            }
            else{
            alert(`Welcome back!\n${json.msg}`);
            localData();
            }
        })
        .then(() => document.getElementById('login-form').reset())
        .catch(error => console.error('There has been a problem: ', error))
    }
}

/***********************
 * EVENTS
 **********************/

user.addEventListener('blur', validateUser);
user.addEventListener('focus', () =>{
    resetField(user)}
);
password.addEventListener('blur', validatePassword);
password.addEventListener('focus', () =>{
    resetField(password)}
);
submitBtn.addEventListener('click', displayData);

/**************
 * DATA STORAGE
 *************/

 function localData(){
    localStorage.setItem('username', user.value);
    localStorage.setItem('password', password.value);
}

function loadData(){
    user.value = localStorage.getItem('username');
    password.value = localStorage.getItem('password');
}

window.onload = () => loadData();