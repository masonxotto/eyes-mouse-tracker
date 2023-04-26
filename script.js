let rightPupil = document.getElementById("rightPupil");
let leftPupil = document.getElementById("leftPupil");
let rightEye = document.getElementById("rightEye");
let leftEye = document.getElementById("leftEye");
let container = document.getElementById("container");
let head = document.getElementById("head");

document.addEventListener("mousemove", handleMouseOver);

function handleMouseOver(e) {
    const y = (e.clientY - container.offsetTop) * 100 / container.offsetHeight + "%";
    const x = (e.clientX - container.offsetLeft) * 100 / container.offsetWidth  + "%";

    rightPupil.style.top = y;
    rightPupil.style.left = x;
    leftPupil.style.top = y;
    leftPupil.style.left = x;
}