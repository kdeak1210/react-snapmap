const Profile = require('../models/Profile')
const Promise = require('bluebird')
const bcrypt = require('bcryptjs')

module.exports = {

  get: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      Profile.find(params, (err, profiles) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(profiles)      
        } else {
          let list = []
          profiles.forEach((profile) => {
            list.push(profile.summary())
          })

          resolve(list)
        }
      })
    })
  },
  
  getById: (id, isRaw) => {
    return new Promise((resolve, reject) => {
      Profile.findById(id, (err, profile) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(profile)      
        } else {
          resolve(profile.summary())
        }
      })
    })
  },

  create: (params, isRaw) => {
    return new Promise((resolve, reject) => {
      const rawPassword = params['password']
      params['password'] = bcrypt.hashSync(rawPassword, 10)

      Profile.create(params, (err, profile) => {
        if (err){
          reject(err)
          return
        }

        if (isRaw){
          resolve(profile)      
        } else {
          resolve(profile.summary())
        }
      })
    })
  },

  update: (id, params) => {

  },

  destroy: (id) => {

  }

}