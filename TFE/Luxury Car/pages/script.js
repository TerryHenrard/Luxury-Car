const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        nav.style.transform = "scale(0.90)";
        nav.style.borderRadius = "20px";
    }
    else {
        nav.style.transform = "scale(1)";
        nav.style.borderRadius = 0;
    }
})

nav.addEventListener("mouseover", () => {
    nav.style.transform = "scale(1)";
    nav.style.borderRadius = 0;
})
/*RS3 sounds*/
const RS3_motor = document.getElementById('RS3-motor');
const RS3_motor_sound = document.getElementById('RS3-sound');
let click_index = 0

RS3_motor.addEventListener('click', () => {
    click_index++;

    if (click_index < 2) {
        RS3_motor_sound.play();
    }
    else {
        RS3_motor_sound.load();
        click_index = 0;
    }
})