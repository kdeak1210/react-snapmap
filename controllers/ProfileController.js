const Profile = require('../models/Profile')
const Promise = require('bluebird')

module.exports = {

  get: (params) => {
    return new Promise((resolve, reject) => {
      Profile.find(params, (err, profiles) => {
        if (err){
          reject(err)
          return
        }

        resolve(profiles)
      })
    })
  },
  
  getById: (id) => {
    return new Promise((resolve, reject) => {
      Profile.findById(id, (err, profile) => {
        if (err){
          reject(err)
          return
        }

        resolve(profile)
      })
    })
  },

  create: (params) => {
    return new Promise((resolve, reject) => {
      Profile.create(params, (err, profile) => {
        if (err){
          reject(err)
          return
        }

        resolve(profile)
      })
    })
  },

  update: (id, params) => {

  },

  destroy: (id) => {

  }

}