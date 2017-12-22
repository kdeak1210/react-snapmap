const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.get('/:action', (req, res) => {
  const { action } = req.params

  if (action == 'currentuser'){
    if (req.session == null){
      res.json({
        confirmation: 'success',
        user: null
      })

      return
    }

    if (req.session.token == null){
      res.json({
        confirmation: 'success',
        user: null
      })

      return
    }

    // Verify token, if valid send back current user's id
    jwt.verify(req.session.token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err){
        // Invalid token, log them out and start over
        req.session.reset()
        res.json({
          confirmation: 'fail',
          user: null
        })

        return
      }

      controllers.profile.getById(decoded.id, false)
      .then(result => {
        res.json({
          confirmation: 'success',
          user: result
        })

        return
      })
      .catch(error => {
        res.json({
          confirmation: 'fail',
          message: error
        })
      })
    })

  }

  if (action == 'logout'){
    req.session.reset()
    res.json({
      confirmation: 'success',
      user: null
    })
  }
})

router.post('/:action', (req, res) => {
  const { action } = req.params
  
  if (action == 'register'){
    controllers.profile.create(req.body, false)
    .then(profile => {

      const token = jwt.sign({id: profile.id}, process.env.TOKEN_SECRET, {expiresIn:5000})
      req.session.token = token

      res.json({
        confirmation: 'success',
        user: profile,
        token: token
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
    const candidate = req.body

    controllers.profile.get({username: candidate.username}, true)
    .then(results => {
      if (results.length == 0){
        throw new Error('User was not found')
        return
      }

      const profile = results[0]
      const isPasswordMatch = (bcrypt.compareSync(candidate.password, profile.password))

      if (!isPasswordMatch){
        throw new Error('Incorrect Password')
        return
      }

      const token = jwt.sign({id: profile._id}, process.env.TOKEN_SECRET, {expiresIn:5000})
      req.session.token = token

      res.json({
        confirmation: 'success',
        user: profile.summary()
      })

      return
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    })
  }
})

module.exports = router