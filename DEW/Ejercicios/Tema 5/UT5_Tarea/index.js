// data && variables
const cookieform = 'cookieForm';
const data = {
    // message error
    userError : document.getElementById('error'),
    userName: document.getElementById('userName'),
    userSurname: document.getElementById('userSurname'),
    userAge: document.getElementById('userAge'),
    userNIF: document.getElementById('userNIF'),
    userEmail: document.getElementById('userEmail'),
    userProvince: document.getElementById('userProvince'),
    userDate: document.getElementById('userDate'),
    userPhone: document.getElementById('userPhone'),
    userHour: document.getElementById('userHour'),
    userAttempts: document.getElementById('userAttempts'),
    // regex
    regexLetras : /^[A-Za-z\s]+$/,
    regexAge : /^(0|[1-9][0-9]?|100|105)$/,
    regexNIF : /^([0-9]{8}[a-zA-Z])$/,
    regexEmail : /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
    regexProvince : /^[\w\/]+$/,
    regexDate : /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    regexPhone : /^[6|7][0-9]{2}[0-9]{3}[0-9]{3}$/,
}
// Cookies
function addCookie() {
    document.cookie = `${cookieform}=1`;
    data.userAttempts.value = '1';
}

function plusCountCookie(valueCookie) {
    let countValueCookie = Number(valueCookie[1]);
    countValueCookie++;
    document.cookie = `${cookieform}=${countValueCookie}`;
    data.userAttempts.value = `${countValueCookie}`;
}

function existCookie(singleCookie) {
    let valueCookie = singleCookie.split('=');
    valueCookie[1] == '' ? addCookie() : plusCountCookie(valueCookie);
}

function getAllCookies(){
    let allCookies = document.cookie.split(';');

    // get in loop for all posible cookies
    allCookies.forEach(singleCookie => {
        // check our cookie
        singleCookie.includes(cookieform) ? existCookie(singleCookie) : addCookie();
    });
}
// name && surname Not Focus (blur)
function toUpperCase(event) {
    event.preventDefault();
    let input = event.target;
    input.value = input.value.toUpperCase();
}

data.userName.addEventListener('blur', toUpperCase);
data.userSurname.addEventListener('blur', toUpperCase);

// draw all input background OK : KO
function inputOK(input){
    input.classList.remove('invalid');
    input.classList.add('valid');
}

function inputKO(input){
    input.classList.remove('valid');
    input.classList.add('invalid');
    input.focus();
    data.userError.style.display = 'block';
}

function checkFields(){
    data.regexLetras.test(data.userName.value.trim()) ? inputOK(data.userName) : inputKO(data.userName);
    data.regexLetras.test(data.userSurname.value.trim()) ? inputOK(data.userSurname) : inputKO(data.userSurname);
    data.regexAge.test(data.userAge.value.trim()) ? inputOK(data.userAge) : inputKO(data.userAge);
    data.regexEmail.test(data.userEmail.value.trim()) ? inputOK(data.userEmail) : inputKO(data.userEmail);
    data.regexProvince.test(data.userProvince.value.trim()) ? inputOK(data.userProvince) : inputKO(data.userProvince);
    data.regexDate.test(data.userDate.value.trim()) ? inputOK(data.userDate) : inputKO(data.userDate);
    data.regexPhone.test(data.userPhone.value.trim()) ? inputOK(data.userPhone) : inputKO(data.userPhone);
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    getAllCookies();
    checkFields(); 
});
