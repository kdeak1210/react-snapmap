const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/:resource', (req, res, next) => {
  
  const resource = req.params.resource
  const controller = controllers[resource]

  if (controller == null){
    res.json({
      confirmation: 'fail',
      message: `Invalid Resource Request: ${resource}`
    })

    return
  }

  controller.get(req.query)
  .then((results) => {
    res.json({
      confirmation: 'success',
      results: results
    })
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err
    })
  })
})

router.get('/:resource/:id', (req, res, next) => {

  const { resource, id } = req.params
  const controller = controllers[resource]

  if (controller == null){
    res.json({
      confirmation: 'fail',
      message: `Invalid Resource Request: ${resource}`      
    })

    return
  }

  controller.getById(id)
  .then((result) => {
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: `${resource} with id ${id} was not found!`
    })
  })
})

router.post('/:resource', (req, res, next) => {

  const resource = req.params.resource
  const controller = controllers[resource]

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: `Invalid Resource Request: ${resource}`      
    })

    return
  }

  controller.create(req.body)
  .then((result) => {
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch((err) => {
    res.json({
      confirmation: 'fai;',
      message: err
    })
  })
})

module.exports = router