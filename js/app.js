const parallax_el = document.querySelectorAll(".parallax");

var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);

let xValue = 0, yValue = 0;
let rotateDegree = 0;

function update(cursorXPosition){
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let isInLeft = el.dataset.left;
        let rotateSpeed = el.dataset.rotation;

        let zValue = (cursorXPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) rotateY(${rotateDegree * rotateSpeed}deg) translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2300px) translateZ(${-zValue * speedz}px)`;
    });
}

update(0);
update(0);
update(0);
update(0);


if(!isMobile){
    window.addEventListener("mousemove", (e) => {

        xValue = e.clientX - window.innerWidth / 2 ;
        yValue = e.clientY - window.innerHeight / 2;

        rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

        update(e.clientX);
    });
}
