const Comment = require('../models/Comment')
const Promise = require('bluebird')

module.exports = {

  get: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      Comment.find(params, (err, comments) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(comments)
        } else {
          let list = []
          comments.forEach((comment) => {
            list.push(comment.summary())
          })

          resolve(list)
        }
      })
    })
  },
  
  getById: (id, isRaw) => {
    return new Promise((resolve, reject) => {
      Comment.findById(id, (err, comment) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(comment)      
        } else {
          resolve(comment.summary())
        }
      })
    })
  },

  create: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      Comment.create(params, (err, comment) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(comment)      
        } else {
          resolve(comment.summary())
        }
      })
    })
  },

  update: (id, params) => {

  },

  destroy: (id) => {

  }

}