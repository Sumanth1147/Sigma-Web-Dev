import path from "path"


// use \\Users\\iitia\\Do...   , not \Users\iitia\\Do...  , otherwise it will consider / as escape sequence
let myPath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 87\\harry.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\harry.txt"))