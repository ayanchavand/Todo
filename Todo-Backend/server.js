const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const frontEndBuildPath = path.join(__dirname, '..', 'Todo-React', 'dist')

app.use(express.static(frontEndBuildPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(frontEndBuildPath, 'index.html'))
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });