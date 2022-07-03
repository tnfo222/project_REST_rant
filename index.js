require('dotenv').config()
const express = require('express')
const app = express()

//Route Homepage
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//Route 404
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)
