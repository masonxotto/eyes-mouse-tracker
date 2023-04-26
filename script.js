let rightPupil = document.getElementById("rightPupil");
let leftPupil = document.getElementById("leftPupil");
let rightEye = document.getElementById("rightEye");
let leftEye = document.getElementById("leftEye");
let container = document.getElementById("container");
let head = document.getElementById("head");

document.addEventListener("mousemove", handleMouseOver);

function handleMouseOver(e) {
    let y = (e.clientY - container.offsetTop) * 100 / container.offsetHeight + "%";
    let x = (e.clientX - container.offsetLeft) * 100 / container.offsetWidth  + "%";

    // console.log("right: offsetLeft", rightEye.offsetLeft);
    // console.log("right: offsetTop", rightEye.offsetTop);
    // console.log("left: offsetLeft", leftEye.offsetLeft);
    // console.log("left: offsetTop", leftEye.offsetTop);
    // console.log(e.clientX, e.clientY);

    rightPupil.style.left = x;
    leftPupil.style.left = x;
    rightPupil.style.top = y;
    leftPupil.style.top = y;
}