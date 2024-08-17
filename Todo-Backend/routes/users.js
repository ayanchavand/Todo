const express = require('express')
const router = express.Router()
const User = require('../models/usersModel')
const path = require('path')

const buildPath = path.join(__dirname, '../../Todo-React/dist/index.html')
router.get('/users', (req, res) =>{
    res.status(404)
    .send("HOW DUMB DO YOU HAVE TO BE TO TYPE A URL LIKE THAT, JUST GO TO /users/(insert your username here) you dumbfuck")
})

router.get('/users/common', async (req, res) => {
    
    res.sendFile(path.join(buildPath))
})

router.get('/api/common', async (req, res) => {
    try{
        let user = await User.findOne({user: 'common'})
        if(!user){
            user = new User({
                user:'common',
                todoList:[]
            })
            await user.save()
        } else res.json(user)

    } catch (error) {
        res.status(500).send('server error')
    }
})

module.exports = router