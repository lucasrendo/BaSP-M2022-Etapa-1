// function to trim whitespaces when not needed and add whitespace in letters array
// add support for characters like '-' or '.'
/* numbers array should contain numbers and string number should go in new array which should be called characters
and include also letters and characters*/
// Add different messages according to the error
// Change repeat password error text
// fix submit button, they duplicate and never get erased (old ones)

//VARIABLES
var form = document.getElementById('signup-form');
var firstName = document.getElementById('name');
var lastName = document.getElementById('last-name');
var id = document.getElementById('id');
var birth = document.getElementById('birth');
var birthArray;
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var region = document.getElementById('region');
var zip = document.getElementById('zip');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repeatPass = document.getElementById('repeat-pass');
var submitBtn = document.getElementById('submit')
var dataContainer = document.getElementById('display-data');
var inputsArray = [firstName, lastName, id, birth, phone, address, region, zip, email, password, repeatPass];
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var signUpRequest = 'https://basp-m2022-api-rest-server.herokuapp.com/signup' ;

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
    text = text.toString()
    if(!textOnlyValidation(text) && !numberOnlyValidation(text) && unsopportedCharacterValidation(text)){
        return true;
    }
    return false
};

function minLengthValidation(min, inputValue){
    if(inputValue.length >= min){
        return true
    }
    return false
}

function maxLengthValidation(max, inputValue){
    if(inputValue.length <= max){
        return true
    }
    return false
}

function toValidDateFormat(date){
    var dateArray = date.split('-');
    var year = dateArray[0]
    var month = dateArray[1]
    var day = dateArray[2]
    var newDate = month + '/' + day + '/' + year;
    return newDate
}

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
    field.nextElementSibling.style.display = 'block'
}

function createElement(field, resolution){
    var element = document.createElement('span');
    var inputTitle = field.previousElementSibling.innerHTML;
    switch(resolution){
        case -1:
            element.innerHTML = 'invalid ' + inputTitle;
            element.className = 'error';
            element.id = inputTitle.toLowerCase() + '-result'
            dataContainer.appendChild(element);
            break;
        case 0:
            element.innerHTML = inputTitle + ' required';
            element.className = 'error';
            element.id = inputTitle.toLowerCase() + '-result'
            dataContainer.appendChild(element);
            break;
        case 1:
            element.innerHTML = inputTitle + ': ' + field.value;
            element.id = inputTitle.toLowerCase() + '-result'
            dataContainer.appendChild(element);
            break;
    }
}

function resetField(field){
    // input error message
    field.style.border = 'none';
    field.nextElementSibling.style.display = 'none'
    // submit results
    dataContainer.style.display = 'none';
}

// GENERIC INPUT VALIDATOR

function validateInput(field, validator, minimum, maximum){
    var status;
    if(field.value === ''){ 
        styleNeutral(field);
        status = 0;
    }
    else if(validator(field.value) && minLengthValidation(minimum, field.value) && !field.value.includes(' ')){
        if(maximum === undefined || (maximum != undefined && maxLengthValidation(maximum, field.value))){
            styleSuccess(field);
            status = 1;
        }
        else if(maximum != undefined && !maxLengthValidation(maximum, field.value)){
            styleError(field);
            status = -1;
        }
        
    }
    else{
        styleError(field)
        status = -1;
    }
    return status
}


/***********************
 * EVENT FUNCTIONS
 **********************/

function validateBirth(){
    var currentYear = 2022; 
    var status;
    var birthYear = birth.value.slice(0,4);
    if(birth.value === ''){ 
        styleNeutral(birth);
        status = 0;
    }
    else if((currentYear - birthYear) < 100 && (currentYear - birthYear) > 17){
        styleSuccess(birth);
        status = 1
    }
    else{
        styleError(birth);
        status = -1
    }
    return status
}

function validateEmail(){
    var status;
    if(email.value === ''){ 
        styleNeutral(email);
        status = 0;
    }
    else if(emailRegex.test(email.value)){
        styleSuccess(email);
        status = 1
    }
    else{
        styleError(email);
        status = -1
    }
    return status
}

function validateAddress(){
    var noSpaceString = address.value
    var status;
    do{
        noSpaceString = noSpaceString.replace(' ', '');
    }while(noSpaceString.includes(' '))
    if(address.value === ''){ 
        styleNeutral(address);
        status = 0;
    }
    else if(
    address.value.length >= 5 && 
    address.value.includes(' ') &&
    !numberOnlyValidation(noSpaceString) &&
    !textOnlyValidation(address.value)
    ){
        styleSuccess(address);
        status = 1
    }
    else {
        styleError(address);
        status = -1
    }
    return status
}

function validatePassword(){
    var status;
    if(repeatPass.value === ''){ 
        styleNeutral(repeatPass);
        status = 0;
    }
    if(password.value === repeatPass.value && password.value !== ""){
        styleSuccess(repeatPass);
        status = 1;
    }
    else{
        styleError(repeatPass);
        status = -1;
    }
    return status
}

function displayData(e){
    e.preventDefault();
    birthArray = toValidDateFormat(birth.value);
    var queryParamBirth = toValidDateFormat(birth.value)
    if(password.value !== repeatPass.value){
        password.style.border = '2px solid var(--scarlet)';
        repeatPass.style.border = '2px solid var(--scarlet)';
        return alert('Passwords do not match');
    }
    else{
        dataContainer.innerHTML = ''
        dataContainer.style.display = 'block';
    }
    createElement(firstName, validateInput(firstName, textOnlyValidation, 4));
    createElement(lastName, validateInput(lastName, textOnlyValidation, 4));
    createElement(id, validateInput(id, numberOnlyValidation, 8));
    createElement(birth, validateBirth());
    createElement(phone, validateInput(phone, numberOnlyValidation, 10, 10));
    createElement(address, validateAddress());
    createElement(region, validateInput(region, unsopportedCharacterValidation, 4));
    createElement(zip, validateInput(zip, numberOnlyValidation, 4, 5));
    createElement(email, validateEmail());
    createElement(password, validateInput(password, alphanumericValidation, 8));
    if(
    validateInput(firstName, textOnlyValidation, 4) === 1 &&
    validateInput(lastName, textOnlyValidation, 4) === 1 &&
    validateInput(id, numberOnlyValidation, 8) === 1 &&
    validateBirth() === 1 &&
    validateInput(phone, numberOnlyValidation, 10, 10) === 1 &&
    validateAddress() === 1 &&
    validateInput(region, unsopportedCharacterValidation, 4) === 1 &&
    validateInput(zip, numberOnlyValidation, 4, 5) === 1 &&
    validateEmail() === 1 &&
    validateInput(password, alphanumericValidation, 8) === 1
    ){
        fetch(`${signUpRequest}?name=${firstName.value}&lastName=${lastName.value}&dni=${id.value}&dob=${queryParamBirth}&phone=${phone.value}&address=${address.value}&city=${region.value}&zip=${zip.value}&email=${email.value}&password=${password.value}`)
        .then(response => {
            if(!response.ok){
                alert(`Error ${response.status}: ${response.statusText}`);
            }
            //codigo para no sobreescribir localStorage
            else{
            alert(`Succesful Sign Up!\n${response.status}: ${response.statusText}`);
            }
            return response.json()
        })
        //.then(/*guardar en localStorage*/)
        .catch(error => console.error('There has been a problem: ', error))
    }
}

/*********
 * EVENTS
 ********/
firstName.addEventListener('blur', () =>{
    validateInput(firstName, textOnlyValidation, 4)}
);
firstName.addEventListener('focus', () =>{
    resetField(firstName)}
);
lastName.addEventListener('blur', () =>{
    validateInput(lastName, textOnlyValidation, 4)}
);
lastName.addEventListener('focus', () =>{
    resetField(lastName)}
);
id.addEventListener('blur', () =>{
    validateInput(id, numberOnlyValidation, 8)}
);
id.addEventListener('focus', () =>{
    resetField(id)}
);
birth.addEventListener('blur', validateBirth);
birth.addEventListener('focus', () =>{
    resetField(birth)}
);
phone.addEventListener('blur', () =>{
    validateInput(phone, numberOnlyValidation, 10, 10)}
);
phone.addEventListener('focus', () =>{
    resetField(phone)}
);
address.addEventListener('blur', validateAddress);
address.addEventListener('focus', () =>{
    resetField(address)}
);
region.addEventListener('blur', () =>{
    validateInput(region, unsopportedCharacterValidation, 4)}
);
region.addEventListener('focus', () =>{
    resetField(region)}
);
zip.addEventListener('blur', () =>{
    validateInput(zip, numberOnlyValidation, 4, 5)}
);
zip.addEventListener('focus', () =>{
    resetField(zip)}
);
email.addEventListener('blur', validateEmail);
email.addEventListener('focus', () =>{
    resetField(email)}
);
password.addEventListener('blur', () =>{
    validateInput(password, alphanumericValidation, 8)}
);
password.addEventListener('focus', () =>{
    resetField(password)}
);
repeatPass.addEventListener('blur', validatePassword);
repeatPass.addEventListener('focus', () =>{
    resetField(repeatPass)}
);
submitBtn.addEventListener('click', displayData);