// // console.log(a1);


// (async function main(){ 
//     // let a = await sleep()
//     // console.log(a)
//     // let b = await sleep()
//     // console.log(b);

//     // let [x, y, rest] = [1, 5, 7, 8, 9, 10]
//     // console.log(x, y, rest)

//     let obj = {
//         a: 1, 
//         b: 2,
//         c: 3
//     }

//     let {a, b} = obj
//     console.log(a, b)

//     let arr = [1, 4, 6]
//     console.log(sum(arr[0], arr[1], arr[2]))
//     console.log(sum(...arr))

    
// })()

// var a1 = 6;


// const sleep = async ()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }

// const sum = async (a, b, c)=> {
//     return a+b+c
// }

// const g = "one"
// const b = "two"

// const c = {g, b}

// console.log(c);

// practice set-- chapter -- 12  
// setTimeout(() => {
//    console.log('Hello');
//     console.log('world');
// }, 2000);

// Q2

// const numbers = [1, 2, 3]

// function avg (n1, n2, n3) {
//     return (n1 + n2 + n3)/3;
// }

// const r = avg(...numbers)

// console.log(r);


// Q3

// async function immediate (n) {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`resolved after ${n}`);
//             resolve('resolved')
//         }, n*1000);
//     })
// }


// (async function execute () {
//     await immediate(3)
//     await immediate(2)
// })()


// Q4




