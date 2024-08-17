const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.status(404)
    .send("HOW DUMB DO YOU HAVE TO BE TO TYPE A URL LIKE THAT, JUST GO TO /users/(insert your username here) you dumbfuck")
})

module.exports = router