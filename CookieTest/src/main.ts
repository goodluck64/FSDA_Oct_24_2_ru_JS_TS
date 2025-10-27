document.addEventListener("DOMContentLoaded", function () {
    // document.querySelector("#button")?.addEventListener("click", async function () {
    //     const result = await fetch("http://localhost:5029/login", {
    //         method: "GET",
    //         headers: {
    //             "Accept": "text/html",
    //         },
    //         credentials: "same-origin",
    //     });
    //
    //     console.log(result.text());
    // });

    const output: HTMLInputElement = document.querySelector("#output")!;
    const getItemInput: HTMLInputElement = document.querySelector("#get-item-input")!;

    document.querySelector("#get-button")?.addEventListener("click", function () {
        const result = localStorage.getItem(getItemInput.value);

        output.value = result ?? "empty";
    });

    document.querySelector("#add-button")?.addEventListener("click", function () {
        const s = getItemInput.value.split(' ');

        localStorage.setItem(s[0], s[1]);
    });

});