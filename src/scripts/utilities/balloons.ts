function showBalloon() {
    let balloon = this.parentElement.querySelector('.balloon');
    balloon.classList.toggle('balloon_show');
}

let balloons = document.querySelectorAll('.attach_bt,.option_bt');

for (let i = 0; i < balloons.length; i++) {
    //@ts-ignore
    balloons[i].onclick = showBalloon;
}
