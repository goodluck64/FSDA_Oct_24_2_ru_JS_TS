document.addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener("keydown", function (event: KeyboardEvent) {
        if (event.key != 'q') {
            return false;
        }
        event.
        console.log(`key: ${event.key}`);
        console.log(`code: ${event.code}`);
        //console.log(`code (which): ${event.key.charCodeAt(0)}`);
    });

    document.addEventListener("keyup", function (event: KeyboardEvent) {
        console.log("keyup");
    });
});