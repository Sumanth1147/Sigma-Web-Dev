import fs from "fs/promises"


// inside module, we can use await directly, without async   ************************************************
let a = await fs.readFile("sumanth.txt")

let b = await fs.appendFile("sumanth.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)