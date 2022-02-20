let form = document.querySelector('.js-form'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPassword = document.querySelector('.js-input-password'),
    inputConfirmPhone = document.querySelector('.js-input-confirmPassword'),
    inputCheckbox = document.querySelector('.js-input-checkbox');


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (validateCountry(emailVal)) {
        console.log('email from Columbia');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if(!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error')
    }


}