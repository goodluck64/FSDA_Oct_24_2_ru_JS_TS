// npm install jquery @types/jquery

import $ from "jquery";

const myAnimate = (function () {
    const FPS = 60;

    type Animatable = {
        property: string,
        min: number,
        max: number,
    };

    // const animatableProps: Animatable[] = [{
    //     property: "opacity",
    //     min: 0,
    //     max: 1
    // }];

    function animate(elem: HTMLElement, prop: Animatable, duration: number) {
        // duration = 2000ms =>
        // 1fps =

        let current: number = prop.min;
        const totalFrames = ((duration / 1000) * FPS);
        const perFrame = 1 / totalFrames;
        let currentFrames = 0;

        function callback() {
            setTimeout(function () {
                current += perFrame / 1;
                elem.style.opacity = current.toString();

                currentFrames += 1;

                if (currentFrames !== totalFrames) {
                    callback();
                }
            }, 1000 / FPS);
        }

        callback();
    }

    return animate;
})();

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const elem = document.querySelector("#target");

        // myAnimate(elem, {
        //     property: "opacity",
        //     min: 0,
        //     max: 1
        // }, 100);
    }, 2000);
});

$(function () {
    // selector

    const $body = $("body");
    const $title = $("#target");

    setTimeout(function () {
        //$body.fadeOut().delay(1000).fadeIn();
        $title.animate({
            left: "350px"
        }, 1000).animate({
            top: "350px"
        });
    }, 1000);

});