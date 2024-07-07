// script.js

function padNumber(number) {
    return number.toString().padStart(2, '0');
}

function updateClock() {
    const now = new Date();
    const hours = padNumber(now.getHours());
    const minutes = padNumber(now.getMinutes());
    const seconds = padNumber(now.getSeconds());
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    checkAlarm();
}

function checkAlarm() {
    const alarmTime = localStorage.getItem('alarmTime');
    if (alarmTime) {
        const [alarmHours, alarmMinutes] = alarmTime.split(':');
        const now = new Date();
        if (now.getHours() == alarmHours && now.getMinutes() == alarmMinutes) {
            document.getElementById('alarmSound').play();
            localStorage.removeItem('alarmTime'); // Remove alarm time after ringing
        }
    }
}

function setAlarm() {
    const alarmInput = document.getElementById('alarmTime').value;
    if (alarmInput) {
        localStorage.setItem('alarmTime', alarmInput);
        alert(`Alarm set for ${alarmInput}`);
    }
}

document.getElementById('setAlarm').addEventListener('click', setAlarm);

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
