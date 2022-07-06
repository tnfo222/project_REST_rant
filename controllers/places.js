const router = require('express').Router()

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  let places = [{
    name: 'Plantalones',
    city: 'Santa Fe',
    state: 'NM',
    cuisines: 'Finger Food, Bakery',
    pic: '/images/plant_lounge.jpg'
  }, {
      name: 'Cozy Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/cat_cafe.jpg'
  }]  
      
    res.render('places/index', {places})
})

module.exports = router

