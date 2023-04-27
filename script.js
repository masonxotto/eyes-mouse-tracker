let rightPupil = document.getElementById("rightPupil");
let leftPupil = document.getElementById("leftPupil");
let rightEye = document.getElementById("rightEye");
let leftEye = document.getElementById("leftEye");
let container = document.getElementById("container");
let head = document.getElementById("head");

document.addEventListener("mousemove", handleMouseOver);

//radius
const headRadius = (head.offsetWidth / 2)

//coords for center of head
const headCenter = {
    x: (head.offsetLeft + headRadius),
    y: (head.offsetTop + headRadius),
}

function handleMouseOver(e) {
    let x;
    let y;
    //find distance to center of circle
    //if less than radius then we are in circle
    //distance formula = sqrt((x1-x2)^2 + (y1-y2)^2)
    distanceToCenter = Math.sqrt(Math.pow((e.clientX - headCenter.x), 2) + Math.pow((e.clientY - headCenter.y), 2)) 
    if(distanceToCenter < headRadius) {
        y = (e.clientY - container.offsetTop) * 100 / container.offsetHeight;
        x = (e.clientX - container.offsetLeft) * 100 / container.offsetWidth;
    }
    else {
        //if mouse is outside of the head we need to find closest point from current
        //mouse coords to edge of the head
        let newY = headCenter.y + (headRadius * ((e.clientY - headCenter.y)/distanceToCenter)); 
        let newX = headCenter.x + (headRadius * ((e.clientX - headCenter.x)/distanceToCenter));
        y = (newY - container.offsetTop) * 100 / container.offsetHeight;
        x = (newX - container.offsetLeft) * 100 / container.offsetWidth;
    }

    rightPupil.style.left = x + '%';
    rightPupil.style.top = y + '%';
    leftPupil.style.left = x + '%';
    leftPupil.style.top = y + '%';
}