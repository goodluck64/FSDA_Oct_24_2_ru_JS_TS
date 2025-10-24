document.addEventListener("DOMContentLoaded", () => {
    const form: HTMLFormElement = document.querySelector("#login-form")!;

    form.addEventListener("submit", function (this: HTMLFormElement, e) {
        //e.preventDefault();
    });


    const mailRegex = /^(\w{3,})@(\w+\.[a-zA-Z]{2,3})$/g;
    const emailInput: HTMLInputElement = form.querySelector("input#email")!;
    const passwordInput: HTMLInputElement = form.querySelector("input#password")!;
    const validationOutput: HTMLDivElement = form.querySelector("div#validation-output")!;

    emailInput.addEventListener("input", function (this: HTMLInputElement, e: Event) {
        if (this.value.match(mailRegex) === null) {
            validationOutput.innerText = "Invalid email";
            validationOutput.style.visibility = "unset";
        } else {
            validationOutput.innerText = "";
            validationOutput.style.visibility = "";
        }
    });

    passwordInput.addEventListener("input", function (this: HTMLInputElement, e: Event) {
        if (this.value.length < 6) {
            validationOutput.innerText = "Invalid password";
            validationOutput.style.visibility = "unset";
        } else {
            validationOutput.innerText = "";
            validationOutput.style.visibility = "";
        }
    });
});