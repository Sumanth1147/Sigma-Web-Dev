

// initial solution

// const boxes = document.querySelectorAll('.box')

// boxes.forEach((box) => {
//     let random = Math.random();
//     if (0 < random < 0.14) {
//         box.style.backgroundColor = 'red';
//         box.style.color = 'white';
//     } else if (0.14 < random < 0.28) {
//         box.style.backgroundColor = 'blue';
//         box.style.color = 'red';
//     }  else if (0.28 < random < 0.42) {
//         box.style.backgroundColor = 'aqua';
//         box.style.color = 'black';
//     }  else if (0.42 < random < 0.56) {
//         box.style.backgroundColor = 'green';
//         box.style.color = 'yellow';
//     }  else if (0.56 < random < 0.70) {
//         box.style.backgroundColor = 'yellow';
//         box.style.color = 'grey';
//     } else if (0.70 < random < 0.84) {
//         box.style.backgroundColor = 'black';
//         box.style.color = 'green';
//     } else if (0.84 < random < 1) {
//         box.style.backgroundColor = 'grey';
//         box.style.color = 'aqua';
//     }
// });


// accurate solution

console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})
