
// // rock paper scissors
// function systemchoice() {
//     const random = Math.random();

//     if (0 < random < 0.33) {
//         return 'r'
//     } else if (0.33 < random < 0.66) {
//         return 'p'
//     } else if (0.66 < random < 0.99) {
//         return 's'
//     }
// }

// const uservalue = prompt('enter your choice')

// if (uservalue === 'r') {
//     const systems = systemchoice();

//     if (systems === 'r') {
//         alert('yours choice matched, please try again') 
//     } else if (systems === 'p') {
//         alert('You lost')
//     } else if (systems === 's') {
//         alert('You Won!!!')
//     }
// }

// if (uservalue === 'p') {
//     const systems = systemchoice();

//     if (systems === 'r') {
//         alert('You Won!!!')
//     } else if (systems === 'p') {
//         alert('yours choice matched, please try again') 
//     } else if (systems === 's') {
//         alert('You lost')
//     }
// }

// if (uservalue === 's') {
//     const systems = systemchoice();

//     if (systems === 'r') {
//         alert('You lost')
//     } else if (systems === 'p') {
//         alert('You Won!!!')
//     } else if (systems === 's') {
//         alert('yours choice matched, please try again') 
//     }
// }


// optimised version 

// script.js

function systemchoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

const uservalue = prompt('Enter your choice: r, p, or s');
const systems = systemchoice();

if (['r', 'p', 's'].includes(uservalue)) {
    if (uservalue === systems) {
        alert('Your choice matched, please try again');
    } else if (
        (uservalue === 'r' && systems === 's') ||
        (uservalue === 'p' && systems === 'r') ||
        (uservalue === 's' && systems === 'p')
    ) {
        alert('You Won!!!');
    } else {
        alert('You lost');
    }
} else {
    alert('Invalid choice, please enter r, p, or s');
}
