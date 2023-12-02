// data && variables
const cookieform = 'cookieForm';
let numberFields = 0;
const data = {
    // message error
    userError: document.getElementById('error'),
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
    // span checked
    userNameSpan: document.getElementById('userNameSpan'),
    userSurnameSpan: document.getElementById('userSurnameSpan'),
    userAgeSpan: document.getElementById('userAgeSpan'),
    userNIFSpan: document.getElementById('userNIFSpan'),
    userEmailSpan: document.getElementById('userEmailSpan'),
    userProvinceSpan: document.getElementById('userProvinceSpan'),
    userDateSpan: document.getElementById('userDateSpan'),
    userPhoneSpan: document.getElementById('userPhoneSpan'),
    userHourSpan: document.getElementById('userHourSpan'),
    userAttemptsSpan: document.getElementById('userAttemptsSpan'),
    // regex
    // test only words
    regexLetras: /^[A-Za-z\s]+$/,
    // test (zero or 1 to 9) && (0 to 9) or (100 to 105)
    regexAge: /^(0|[1-9][0-9]?|10[0-5])$/,
    // test numbers 0 to 8 eight time and 1 letter
    regexNIF: /^([0-9]{8}[a-zA-Z])$/,
    // normal expresion for google to email (copied)
    regexEmail: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
    // any 4 number to the begin - (0 to 9 || 10 to 12) - same for 
    regexDate: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[0-1])$/,
    // test start with 6 || 7 and other eight numbers
    regexPhone: /^[6|7][0-9]{8}$/,
    // from 00 to 23:59
    regexHour: /^(?:[0-1]\d|2[0-3]):[0-5]\d$/,
    // register 3 attempts for good signal
    regexAttempts: /^(0-3)$/,
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
    valueCookie[1] == 0 ? addCookie() : plusCountCookie(valueCookie);
}

function getAllCookies() {
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
function inputOK(input) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    numberFields++;
}

function inputKO(input) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    input.focus();
    data.userError.style.display = 'block';
}

// petition to confirm form
function success() {
    Swal.fire({
        title: "¿ Deseas enviar el formulario ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
    }).then((result) => {
        if (result.isConfirmed) {
            document.cookie = `${cookieform}=0`;
            Swal.fire({
                icon: "success",
                title: "Datos enviados!",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function () {
                window.open('https://www.google.com');
            }, 2000);
        }
    });
}

function checkFields() {
    data.regexLetras.test(data.userName.value.trim()) ? inputOK(data.userNameSpan) : inputKO(data.userNameSpan);
    data.regexLetras.test(data.userSurname.value.trim()) ? inputOK(data.userSurnameSpan) : inputKO(data.userSurnameSpan);
    data.regexAge.test(data.userAge.value.trim()) ? inputOK(data.userAgeSpan) : inputKO(data.userAgeSpan);
    data.regexNIF.test(data.userNIF.value.trim()) ? inputOK(data.userNIFSpan) : inputKO(data.userNIFSpan);
    data.regexEmail.test(data.userEmail.value.trim()) ? inputOK(data.userEmailSpan) : inputKO(data.userEmailSpan);
    data.userProvince.value.trim() !== '' ? inputOK(data.userProvinceSpan) : inputKO(data.userProvinceSpan);
    data.regexDate.test(data.userDate.value.trim()) ? inputOK(data.userDateSpan) : inputKO(data.userDateSpan);
    data.regexPhone.test(data.userPhone.value.trim()) ? inputOK(data.userPhoneSpan) : inputKO(data.userPhoneSpan);
    data.regexHour.test(data.userHour.value.trim()) ? inputOK(data.userHourSpan) : inputKO(data.userHourSpan);
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    getAllCookies();
    checkFields();
    if (numberFields == 9) success();
    numberFields = 0;
});
