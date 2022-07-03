require('dotenv').config()
const express = require('express')
const app = express()

//defining the view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Route for places
app.use('/places', require('./controllers/places'))

//Route Homepage
app.get('/', (req, res) => {
    res.render('Home')
})

//Route 404
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)
