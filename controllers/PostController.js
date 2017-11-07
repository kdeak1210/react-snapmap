const Post = require('../models/Post')
const Promise = require('bluebird')

module.exports = {

  get: (params) => {
    return new Promise((resolve, reject) => {
      Post.find(params, (err, posts) => {
        if (err){
          reject(err)
          return
        }

        resolve(posts)
      })
    })
  },
  
  getById: (id) => {
    return new Promise((resolve, reject) => {
      Post.findById(id, (err, post) => {
        if (err){
          reject(err)
          return
        }

        resolve(post)
      })
    })
  },

  create: (params) => {
    return new Promise((resolve, reject) => {
      Post.create(params, (err, post) => {
        if (err){
          reject(err)
          return
        }

        resolve(post)
      })
    })
  },

  update: (id, params) => {

  },

  destroy: (id) => {

  }

}