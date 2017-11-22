const Post = require('../models/Post')
const Promise = require('bluebird')

module.exports = {

  get: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      Post.find(params, (err, posts) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(posts)
        } else {
          let list = []
          posts.forEach((post) => {
            list.push(post.summary())
          })

          resolve(list)
        }
      })
    })
  },
  
  getById: (id, isRaw) => {
    return new Promise((resolve, reject) => {
      Post.findById(id, (err, post) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(post)
        } else {
          resolve(post.summary())
        }
      })
    })
  },

  create: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      Post.create(params, (err, post) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(post)
        } else {
          resolve(post.summary())
        }
      })
    })
  },

  update: (id, params) => {

  },

  destroy: (id) => {

  }

}