document.addEventListener("DOMContentLoaded", () => {
    /// Capturing and bubbling
    // const test = document.querySelector("#test");
    // const paragraph = document.querySelector("#test > p");
    //
    // if (test === null || paragraph === null) {
    //     return;
    // }
    //
    // document.body.addEventListener("click", function (event) { // 3 bubbling
    //     alert(this + " CAPTURE");
    // }, true);
    //
    // test.addEventListener("click", function (event) { // 2 bubbling
    //     // @ts-ignore
    //     alert(this + " CAPTURE");
    // }, true);
    //
    // paragraph.addEventListener("click", function (event) { // 1 bubbling
    //     // @ts-ignore
    //     alert(this + " CAPTURE");
    // }, true);
    //
    // document.body.addEventListener("click", function (event) { // 3 bubbling
    //     alert(this + " BUBBLING");
    // });
    //
    // test.addEventListener("click", function (event) { // 2 bubbling
    //     // @ts-ignore
    //     alert(this + " BUBBLING");
    // }, true);
    //
    // paragraph.addEventListener("click", function (event) { // 1 bubbling
    //     // @ts-ignore
    //     alert(this + " BUBBLING");
    // });

    /// Capturing and bubbling 2
    // const d1 = document.querySelector("#d1");
    // const d2 = document.querySelector("#d2");
    // const d3 = document.querySelector("#d3");
    //
    // // MouseEvent
    // // KeyboardEvent
    // // PointerEvent
    //
    // // keypress, keydown, keyup
    // d2?.addEventListener("click", function (this: HTMLElement, event) {
    //     alert(event.eventPhase);
    //     alert("Handler " + this.id);
    //     alert("Target  " + (event.target as HTMLElement).id);
    // }, true);
    //
    // d2?.addEventListener("click", function (this: HTMLElement, event) {
    //     alert(event.eventPhase);
    //     alert("Bubbling");
    //     alert("Handler " + this.id);
    //     alert("Target  " + (event.target as HTMLElement).id);
    // });


    const square: HTMLElement = document.querySelector("#square") as HTMLDivElement;

    if (square === null) {
        return;
    }

    /// Mouseover and out (bubbling)
    // square.addEventListener("mouseover", function (event: MouseEvent) {
    //     console.log("mouseover");
    // });
    //
    // square.addEventListener("mouseout", function (event: MouseEvent) {
    //     console.log("mouseout");
    // });

    square.addEventListener("mouseenter", function (event: MouseEvent) {
        console.log("mouseenter");
        console.log("target: " + (event.target as HTMLElement).getAttribute("data-type"));
        console.log("relatedTarget: " + (event.relatedTarget as HTMLElement).getAttribute("data-type"));
        console.log("currentTarget: " + (event.currentTarget as HTMLElement).getAttribute("data-type"));
    });


    square.addEventListener("mouseleave", function (event: MouseEvent) {
        console.log("mouseleave");
        console.log("target: " + (event.target as HTMLElement).getAttribute("data-type"));
        console.log("relatedTarget: " + (event.relatedTarget as HTMLElement).getAttribute("data-type"));
        console.log("currentTarget: " + (event.currentTarget as HTMLElement).getAttribute("data-type"));
    });

    // const bigContainer = document.querySelector("#big-container");
    //
    // bigContainer?.addEventListener("mousemove", function (event: MouseEvent) {
    //     console.log(`pageX: ${event.pageX} | pageY: ${event.pageY}`);
    //     console.log(`clientX: ${event.clientX} | clientY: ${event.clientY}`);
    //     console.log(`screenX: ${event.screenX} | screenY: ${event.screenY}`);
    // });

    const eggContainer = document.getElementById("egg");

    if (eggContainer === null) {
        return;
    }

    document.body?.addEventListener("mousemove", function (event: MouseEvent) {
        eggContainer.style.top = event.pageY + "px";
        eggContainer.style.left = event.pageX + "px";
    });

    document.body?.addEventListener("contextmenu", function (event: MouseEvent) {
        console.log("contextmenu event");

        event.preventDefault();
    });


    const element: HTMLElement = document.querySelector("#google") as HTMLAnchorElement;


    element.addEventListener("click", function (event: MouseEvent) {
        event.preventDefault();
    });
});
//