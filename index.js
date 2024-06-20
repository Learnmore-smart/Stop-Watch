let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")
let isPaused = true

function padStart(value) {
    return String(value).padStart(2, "0");
}
// We pad the screen with '0'

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function starterror() {
    alert("Eh... The stop watch already started.")
}

function startClock() {
    if (isPaused === true) {
        interval = setInterval(timer, 1000);
        isPaused = false;
    }
    if (isPaused === false) {
        if (interval) return;
    }
    interval = setInterval(timer, 1000);
}

function stopClock() {
    clearInterval(interval)
    isPaused = true
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}