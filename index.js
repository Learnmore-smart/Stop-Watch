let centisecondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")
let isPaused = true

function padStart(value) {
    return String(value).padStart(2, "0");
}
// We pad the screen with '0'

function setTime() {
    const minutes = Math.floor(centisecondsElapsed / 6000); 
    const seconds = Math.floor((centisecondsElapsed % 6000) / 100);
    const centiseconds = (centisecondsElapsed % 100); // Calculate last
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(centiseconds)}`;
}

function timer() {
    centisecondsElapsed += 1;
    setTime()
}

function startClock() {
    if (isPaused === true) {
        interval = setInterval(timer, 10); // Refresh every 10 milliseconds, so every centisecond
        isPaused = false;
    }
    if (isPaused === false) {
        if (interval) return;
    }
    interval = setInterval(timer, 10);
}

function stopClock() {
    clearInterval(interval)
    isPaused = true
}

function resetClock() {
    stopClock()
    centisecondsElapsed = 0;
    setTime()
}
