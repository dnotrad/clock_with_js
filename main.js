let addTime = (type, elem) => {
    let time = type();
    if (time < 10) time = `0${time}`;
    elem.innerHTML = time;
}

audioObj = new Audio('clock-audio.mp3');

const updateTime = () => {
    let hoursEl = document.querySelector(".hours");
    let minutesEl = document.querySelector(".minutes");
    let secondsEl = document.querySelector(".seconds");

    let date = new Date();

    addTime( ()=> date.getHours(), hoursEl);
    addTime( ()=> date.getMinutes(), minutesEl);
    addTime( ()=> date.getSeconds(), secondsEl);

    audioObj.play().catch((error) => {
        console.log(error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval( updateTime, 1000 );
} )