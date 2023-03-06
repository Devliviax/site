window.onscroll = () => {
    myFunction()
};
var navbar = document.getElementById("navbar"),
    sticky = navbar.offsetTop;

function myFunction() {
    1 < window.scrollY ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}
var elementBody = document.querySelector("body"),
    btnAumentar = document.querySelector("#btnaumentar"),
    btnDiminuir = document.querySelector("#btndiminuir"),
    fontSize = 100,
    increaseDecrease = 10;
btnDiminuir.addEventListener("click", function (e) {
    fontSize -= increaseDecrease, elementBody.style.fontSize = fontSize + "%"
}), btnAumentar.addEventListener("click", function (e) {
    fontSize += increaseDecrease, elementBody.style.fontSize = fontSize + "%"
});