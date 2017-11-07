const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', null)
})

router.get('/testforms', (req, res, next) => {
  res.render('testforms', null)
})

module.exports = router