//Dependencies
const router = require('express').Router()
const places = require('../models/places.js')

// GET /places
router.get('/', (req, res) => { 
  res.render('places/index', {places})
})

//Default values when submitted if not required
router.post('/', (req, res) => {
  if (!req.body.pic) {
    ///Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//Create
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id})
  }
})

module.exports = router

