const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
// const bcrypt = require('bcrypt')

router.get('/:action', (req, res) => {
  const { action } = req.params

  if (action == 'currentuser'){
    res.json({
      confirmation: 'success',
      action
    })
  }

  if (action == 'logout'){
    res.json({
      confirmation: 'success',
      action
    })
  }
})

router.post('/:action', (req, res) => {
  const { action } = req.params
  
  if (action == 'register'){
    controllers.profile.create(req.body, false)
    .then(profile => {
      res.json({
        confirmation: 'success',
        user: profile
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err
      })
    })
  }

  if (action ==  'login'){

  }
})

module.exports = router