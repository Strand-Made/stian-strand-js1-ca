const form = document.querySelector("#contactForm");

form.addEventListener("submit", formControl)

function formControl(event) {
    event.preventDefault();

    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError")
    const nameValue = name.value;

    const subject = document.querySelector("#subject");
    const subjectError = document.querySelector("#subjectError");
    const subjectValue = subject.value;

    // const email = document.querySelector("#email")
    // const emailError = document.querySelector("#subjectError")
    // const emailValue = email.value;

    const address = document.querySelector("#address");
    const addressError = document.querySelector("#addressError");
    const addressValue = address.value;

    


}