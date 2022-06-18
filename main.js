let btns = document.querySelectorAll("input");
let display = document.querySelector(".nums");
let resDisplay = document.querySelector(".result");
let add = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let devid = document.querySelector("#devid");
let mult = document.querySelector("#multiple");
let result = document.querySelector("#result");
let remove = document.querySelector("#remove");
let del = document.querySelector("#del");

btns.forEach((e) => {
    e.addEventListener("click", (element) => {
        if (element.target.value === "=") {
            if (display.innerHTML === "" || display.innerHTML === "0") {
                resDisplay.innerHTML = "0";
            } else {
                resDisplay.innerHTML = eval(display.innerHTML);
                display.innerHTML = "";
            }
        } else {
            if (element.target.value === "del") {
                display.innerHTML = display.innerHTML.slice(0, -1);
            } else {
                display.innerHTML += element.target.value;
                if (
                    element.target.value === "+" ||
                    element.target.value === "/" ||
                    element.target.value === "/" ||
                    element.target.value === "-"
                ) {
                    for (var i = 0; i < display.innerHTML.length; i++) {
                        if (
                            display.innerHTML[i - 1] === "+" ||
                            display.innerHTML[i - 1] === "/" ||
                            display.innerHTML[i - 1] === "/" ||
                            display.innerHTML[i - 1] === "-"
                        ) {
                            display.innerHTML = display.innerHTML.slice(0, i);
                        } else {
                            display.innerHTML += element.target.value;
                        }
                    }
                }
            }
        }
        if (element.target.value === "c") {
            display.innerHTML = "";
            resDisplay.innerHTML = "";
        }
    });
});