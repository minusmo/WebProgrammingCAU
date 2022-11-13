"use strict";
window.onload = () => {
    const div = document.getElementsByTagName("div");
    div[0].addEventListener("mouseover", (e) => {
        e.target.style.background = "yellow";
    });
    div[0].addEventListener("mouseout", (e) => {
        e.target.style.background = "white";
    });
}