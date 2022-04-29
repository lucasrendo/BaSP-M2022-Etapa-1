// should validate for unsupported character and trim whitespaces, also validate for empty input
// Change border color to background color in error and success

var user = document.getElementById('user');
var password = document.getElementById('password');
var submitBtn = document.querySelector('button[type="submit"]');
var numbers= ['0','1','2','3','4','5','6','7','8','9'];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

function alphanumericValidation(str){
    for(var i = 0; i < letters.length; i++){
        if(str.includes(letters[i])){
            for(var j = 0; j < numbers.length; j++){
                if(str.includes(numbers[j])){
                    return true
                }
            }
        }
    }
    return false
}

function validateUser(){
    if(!emailRegex.test(user.value)){
        user.insertAdjacentHTML('afterend', '<p class="error">Invalid Email</p>');
        user.style.border = '2px solid var(--scarlet)';
    }
    else{
        user.style.border = '2px solid var(--bright-green)';
        user.insertAdjacentHTML('afterend', '<i class="bx bx-check"></i>');
    }
}

function resetUser(){
    user.style.border = 'none';
    user.parentElement.lastChild.remove();
}

function validatePassword(){
    if(!alphanumericValidation(password.value)){
        password.insertAdjacentHTML('afterend', '<p class="error">Invalid Password</p>');
        password.style.border = '2px solid var(--scarlet)';
    }
    else{
        password.style.border = '2px solid var(--bright-green)';
        password.insertAdjacentHTML('afterend', '<i class="bx bx-check"></i>');
    }
}

function resetPassword(){
    password.style.border = 'none';
    password.parentElement.lastChild.remove();
}

function displayData(e){
    e.preventDefault();
    var dataContainer = document.getElementById('display-data');
    dataContainer.style.display = 'block'
    if(!emailRegex.test(user.value) && user.value !== ""){
        dataContainer.firstElementChild.innerHTML = user.value + ' is an invalid Email';
        dataContainer.firstElementChild.style.color = 'var(--scarlet)'
    }
    else if(user.value === ""){
        dataContainer.firstElementChild.innerHTML ='Email is required';
        dataContainer.firstElementChild.style.color = 'var(--scarlet)'
    }
    else{
        dataContainer.firstElementChild.style.color = 'var(--grayish-navy)'
        dataContainer.firstElementChild.innerHTML = 'Email: ' + user.value;
    }
    if(!alphanumericValidation(password.value) && password.value !== ""){
        dataContainer.lastElementChild.innerHTML = password.value + ' is an invalid Password';
        dataContainer.lastElementChild.style.color = 'var(--scarlet)'
    }
    else if(password.value === ""){
        dataContainer.lastElementChild.innerHTML ='Password is required';
        dataContainer.lastElementChild.style.color = 'var(--scarlet)'
    }
    else{
        dataContainer.lastElementChild.style.color = 'var(--grayish-navy)'
        dataContainer.lastElementChild.innerHTML = 'Password: ' + password.value;
    }
}

user.addEventListener('blur', validateUser);
user.addEventListener('focus', resetUser);
password.addEventListener('blur', validatePassword);
password.addEventListener('focus', resetPassword);
submitBtn.addEventListener('click', displayData);