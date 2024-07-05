// chapter 6 practise set

// Q1
// const age = prompt('enter your age');

// if (age > 18 ) {
//   alert('you can drive')
// } else if (age < 0) {
//     console.log('entered age is negative');
// } else {
//     alert("you can't drive");
// }

// // Q2
// const seeagain = confirm('do you want to see result again')

// if (seeagain) {
//     if (age > 18 ) {
//         alert('you can drive')
//       } else {
//           alert("you can't drive");
//       }
// }

// Q4

// const num = prompt('enter a number');

// if (num > 4) {

// }

// Q5
// const color = prompt('enter color');

// document.body.style.backgroundColor = color;

// chapter - 7

// Q1

// const navElement = document.getElementsByTagName('nav')[0];

// // Get the first <li> element inside the <nav>
// const firstLiElement = navElement.querySelector('li');

// // Change the color of the first <li> element to red
// // firstLiElement.style.color = 'red';

// Q2

// const elements = document.querySelectorAll('.box');

// elements[0].style.color = 'red'
// elements[2].style.color = 'red'

// chapter 8  -- Q1  

// const box1 = document.getElementById('box1');

// box1.addEventListener('click', () => {
//     alert(" I'm box 1")
// })

// const box2 = document.getElementById('box2');

// box2.addEventListener('click', () => {
//     alert(" I'm box 2")
// })


// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.5) {
//         resolve("I'm resolved")
//     } else {
//             reject('rejected')
//     }
// })

// prom1.then((a) => {
//     console.log(a);   
// }).catch((e) => {
//     console.log(e);
    
// })
// console.log(prom1);

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


async function getData() {

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

let data = await x.json();
return data;
}

async function main() {
    console.log('inside main');
    let data = await getData();
    console.log(data);
    
}

main()








