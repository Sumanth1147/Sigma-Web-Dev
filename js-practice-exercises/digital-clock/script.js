// script.js

// function updateClock() {
//     const data = new Date();

//     // Date
//     const date = data.getDate();
//     const month = data.getMonth() + 1; // Months are zero-indexed
//     const year = data.getFullYear();
//     const fulldate = `${date}-${month}-${year}`;
//     const datediv = document.querySelector('.date');
//     datediv.textContent = `Date: ${fulldate}`;

//     // Time
//     const hours = data.getHours();
//     const minutes = data.getMinutes();
//     const time = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}`;
//     const timediv = document.querySelector('.time');
//     timediv.textContent = `Time: ${time}`;

//     // Live seconds
//     const seconds = data.getSeconds();
//     const livediv = document.querySelector('.liveseconds');
//     livediv.textContent = `Seconds: ${seconds.toString().padStart(2, '0')}`;
// }

// // Update the clock every second
// setInterval(updateClock, 1000);

// // Initial call to display the clock immediately
// updateClock();


// optimised version

// script.js

function padNumber(number) {
    return number.toString().padStart(2, '0');
}

function updateClock() {
    const now = new Date();

    // Date
    const date = padNumber(now.getDate());
    const month = padNumber(now.getMonth() + 1); // Months are zero-indexed
    const year = now.getFullYear();
    document.querySelector('.date').textContent = `Date: ${date}-${month}-${year}`;

    // Time
    const hours = padNumber(now.getHours());
    const minutes = padNumber(now.getMinutes());
    const seconds = padNumber(now.getSeconds());
    document.querySelector('.time').textContent = `Time: ${hours} : ${minutes}`;
    document.querySelector('.liveseconds').textContent = `Seconds: ${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

