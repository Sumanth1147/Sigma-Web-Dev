const express = require('express')
const app = express()
const port = 3000
const birds = require('./routes/birds')
const fs = require('fs');

// ...
// here it's '/birds' ------- not 'birds'   -----------   ******************************
app.use('/birds', birds)


// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am Rohan bhai";
    next()
})


app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})