
const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);



const validateRegistrationForm = () => {
    let name = document.querySelector('.name_in').value;
    let surname = document.querySelector('.surname_in').value;
    let mail = document.querySelector('.mail_in').value;
    let pass = document.querySelector('.pass_in').value;

    let patternForName = /[a-zA-Zа-яА-Я]/gi;
    let patternForMail = /\S+@\S+\.\S+/gi;
    let patternForPass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/gi;

    if (!(patternForName.test(name))) {
        alert('Name entered incorrectly');
        return false;
    } else if (!(patternForName.test(surname))) {
        alert('Surname is entered incorrectly');
        return false;
    } else if (!(patternForMail.test(mail))) {
        alert('Mail entered incorrectly');
        return false;
    } else if (!(patternForPass.test(pass))) {
        alert('Password entered incorrectly');
        return false;
    } else {
        return true;
    };
};

let regButton = document.querySelector('.btn_data');
regButton.addEventListener("click", validateRegistrationForm);