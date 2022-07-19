//Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
//Decrypt data
app.use(express.urlencoded({ extended: true }))
//Add PUT and DELETE methods
app.use(methodOverride('_method'))

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers and Routes
app.use('/places', require('./controllers/places'))

//Home Page Route
app.get('/', (req, res) => {
    res.render('home')
})

//Error 404 Page Route
app.get('*', (req, res) => {
    res.render('error404')
})

//Listen for Connections
app.listen(process.env.PORT)
