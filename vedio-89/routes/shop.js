const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('shop home page')
})
// define the about route
router.get('/shoppost/:slug', (req, res) => {
  res.send(`fetching the shop info ${req.params.slug}`)
})

module.exports = router