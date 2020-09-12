const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError")

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function formControl(event) {
    
    event.preventDefault();

    if(contrLength(name.value, 4) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(contrLength(subject.value,9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    
    if(emailValidator(email) === true) {
        emailError.style.display = "none";
    }else {
        emailError.style.display = "block";
    }

    if(contrLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    

}
form.addEventListener("submit", formControl)

function contrLength(value, lnth) {
    if(value.trim().length > lnth){
        return true;
    } else {
        return false;
    }
}

function emailValidator(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}