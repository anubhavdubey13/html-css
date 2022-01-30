var fullPage = document.querySelector('html');
var btnToggle = document.getElementById('btn_toggle');
var toggleSwitch = document.querySelector('.toggleSwitch');

fullPage.style.backgroundColor = "white";
fullPage.style.color = "black";

function callback() {
    const bgColor = fullPage.style.backgroundColor;
    fullPage.style.backgroundColor = (bgColor === "white" ? "black" : "white");
    const txtColor = fullPage.style.color
    fullPage.style.color = (txtColor === "black" ? "white" : "black");
    //console.log(bgColor, txtColor);
    toggleSwitch.style.borderColor = (txtColor === "black" ? "white" : "black");
}

btnToggle.addEventListener('click', callback);