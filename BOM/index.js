// BOM (Browser Object Model)


console.log(this);


//  DOM (Document Object Model)


document.addEventListener("DOMContentLoaded", function () {
    // console.log(document);
    // console.log(document.head);
    // console.log(document.body);


    const div = document.getElementById("my-id");

    if (div) {
        div.style["font-size"] = "20px"; //
        div.style.fontSize = "20px";
        div.style.backgroundColor = "#000";
        div.style.color = "#fff";
    }

    const elements = document.getElementsByClassName("my-cls");

    let i = 0;
    for (const element of elements) {
        element.innerHTML = `<div style="color: deeppink">Index: ${i++}</div>`
    }

    let divs = document.getElementsByTagName("div");

    for (const div1 of divs) {
        console.log(div1);
    }

    let myIdDiv = document.querySelector("#my-id");

    console.log(myIdDiv);

    const all = document.querySelector("*");
});




