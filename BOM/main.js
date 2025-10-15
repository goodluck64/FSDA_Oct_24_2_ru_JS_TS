document.addEventListener("DOMContentLoaded", function () {
    let counterValue = 0;
    const counter = document.querySelector("div#counter");
    const counterButton = document.querySelector("input#counter-button");

    counterButton.addEventListener("click", function (event) {
        counter.innerHTML = `Counter: ${++counterValue}`;
    });
});