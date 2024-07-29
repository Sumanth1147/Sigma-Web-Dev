const fs = require("fs");

console.log('starting');

fs.writeFile('sumanth.txt', "sumanth always tries to improve", () => {
    console.log('writing');
    fs.readFile("sumanth.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile('sumanth.txt', ', likes dance', ()=> {
    console.log('adding');
})

console.log('ending');