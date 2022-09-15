export const date = document.querySelector('.header__date');
export const todayDate = new Date().toLocaleDateString();;
date.textContent = todayDate;

export const time = document.querySelector('.header__time');

function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    time.textContent = hour + " : " + min + " : " + sec;
    let t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime(elem) {
    if (elem < 10) {
        return "0" + elem;
    }
    else {
        return elem;
    }
}

currentTime();
