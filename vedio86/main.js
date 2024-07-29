// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


import harry from "./mymodule.js"
console.log(harry)


// ******************* important-----------
//  node actually wraps this default function around our code
//  so these keywords ( (exports, require, module, __filename, __dirname) AVAILABLE BY DEFAULT
// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

// const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)