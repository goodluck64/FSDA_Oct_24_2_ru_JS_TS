// AJAX
// Asynchronous
// JavaScript
// &
// XML

/* Inserting and creating elements */
// document.addEventListener("DOMContentLoaded", () => {
//     const uList = document.createElement("ul");
//     const lItems: HTMLLIElement[] = [];
//     uList.id = "games";
//
//     for (let i = 0; i < 3; ++i) {
//         const liItem = document.createElement("li");
//
//         uList.appendChild(liItem);
//         liItem.innerText = `item${i}`;
//     }
//
//     // document.body.appendChild(uList);
//
//     const targetElement = document.querySelector("#container")!;
//
//     // targetElement.insertAdjacentElement("beforeend", uList);
//
//     // targetElement.insertAdjacentText("beforeend", `<span>&lt;div&gt; - это блочный тег</span>`);
//
//     // appendHTML(targetElement, "<span style='color: deeppink'>Test</span>")
//
// });
//
// function appendHTML(element: Element, html: string)
// {
//     element.insertAdjacentHTML("beforeend", html);
// }
//
// function prependHTML(element: Element, html: string)
// {
//     element.insertAdjacentHTML("afterbegin", html);
// }
//
// function appendElement(element: Element, elementToAdd: Element)
// {
//     element.insertAdjacentElement("beforeend", elementToAdd);
// }
//
// function prependElement(element: Element, elementToAdd: Element)
// {
//     element.insertAdjacentElement("afterbegin", elementToAdd);
// }


/* AJAX */

type Doll = {
    id: number,
    name: string,
    color: string,
    price: number,
    height: number,
};

document.addEventListener("DOMContentLoaded", () => {
    const dollGetButton = document.querySelector("#doll-get")!;
    const dollContentDiv = document.querySelector("#doll-content")!;

    dollGetButton.addEventListener("click", async () => {
        const response = await fetch(" http://localhost:5018/dolls");
        const jsonResult: Doll = await response.json(); // JSON.parse
        const ul = createDoll(jsonResult);

        dollContentDiv.appendChild(ul);

    });

});

const classNames = ["doll-id", "doll-name", "doll-color", "doll-price", "doll-height"];

function createDoll(doll: Doll): HTMLUListElement {
    const ul = document.createElement("ul");

    ul.classList.add("doll");

    // id
    {
        const li = document.createElement("li");

        li.classList.add("doll-id");
        li.innerText = `Id: ${doll.id}`;

        ul.appendChild(li);
    }

    // name
    {
        const li = document.createElement("li");

        li.classList.add("doll-name");
        li.innerText = `Name: ${doll.name}`;

        ul.appendChild(li);
    }

    // color
    {
        const li = document.createElement("li");

        li.classList.add("doll-color");
        li.innerText = `Color: ${doll.color}`;

        ul.appendChild(li);
    }

    // price
    {
        const li = document.createElement("li");

        li.classList.add("doll-price");
        li.innerText = `Price: ${doll.price}`;

        ul.appendChild(li);
    }

    // height
    {
        const li = document.createElement("li");

        li.classList.add("doll-height");
        li.innerText = `Height: ${doll.height}`;

        ul.appendChild(li);
    }

    return ul;
}
