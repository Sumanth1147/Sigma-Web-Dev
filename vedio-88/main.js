
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})