const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const frontEndBuildPath = path.join(__dirname, '..', 'Todo-React', 'dist')

app.use(express.static(frontEndBuildPath));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(frontEndBuildPath, 'index.html'))
})

const userRouter = require('./routes/users')
//const { error } = require('console')

app.use('/', userRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
            console.log('MONGO DB CONNECTED LESSGO')
          });
    })
    .catch((error) => {console.log(error)})

