let addTime = (type, elem) => {
    let time = type();
    if (time < 10) time = `0${time}`;
    elem.innerHTML = time;
}

const updateTime = () => {
    let hoursEl = document.querySelector(".hours");
    let minutesEl = document.querySelector(".minutes");
    let secondsEl = document.querySelector(".seconds");

    // let hours = new Date().getHours();
    // if (hours < 10) hours = `0${hours}`;
    // hoursEl.innerHTML = hours;

    // let minutes = new Date().getMinutes();
    // if (minutes < 10) minutes = `0${minutes}`;
    // minutesEl.innerHTML = minutes;

    // let seconds = new Date().getSeconds();
    // if (seconds < 10) seconds = `0${seconds}`;
    // secondsEl.innerHTML = seconds;

    addTime( ()=> new Date().getHours(), hoursEl);
    addTime( ()=> new Date().getMinutes(), minutesEl);
    addTime( ()=> new Date().getSeconds(), secondsEl);

}

document.addEventListener('DOMContentLoaded', () => {
    setInterval( updateTime, 1000 )
} )