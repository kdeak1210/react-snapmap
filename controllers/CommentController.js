const Comment = require('../models/Comment')
const Promise = require('bluebird')

module.exports = {

  get: (params) => {
    return new Promise((resolve, reject) => {
      Comment.find(params, (err, comments) => {
        if (err){
          reject(err)
          return
        }

        resolve(comments)
      })
    })
  },
  
  getById: (id) => {
    return new Promise((resolve, reject) => {
      Comment.findById(id, (err, comment) => {
        if (err){
          reject(err)
          return
        }

        resolve(comment)
      })
    })
  },

  create: (params) => {
    return new Promise((resolve, reject) => {
      Comment.create(params, (err, comment) => {
        if (err){
          reject(err)
          return
        }

        resolve(comment)
      })
    })
  },

  update: (id, params) => {

  },

  destroy: (id) => {

  }

}