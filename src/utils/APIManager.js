import superagent from 'superagent'
import Promise from 'bluebird'

export default {

  get: (url, params) => {
    return new Promise((resolve, reject) => {
      superagent
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err){
          reject(err)
          return
        }

        if (response.body.confirmation != 'success'){
          reject({message: response.body.message})
          return
        }

        resolve(response.body)
      })
    })
  },

  post: (url, params) => {
    return new Promise((resolve, reject) => {
      superagent
      .post(url)
      .send(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err){
          reject(err)
          return
        }

        if (response.body.confirmation != 'success'){
          reject({message: response.body.message})
          return
        }

        resolve(response.body)
      })
    })
  },

  uploadFile: (url, file, params) => {
    return new Promise((resolve, reject) => {

      let uploadRequest = superagent.post(url)  // create a request object
      uploadRequest.attach('file', file)        // pass in the file to upload

      if (params != null){
        // If there are params, iterate and attach them to superagent request
        Object.keys(params).forEach(key => {
          uploadRequest.field(key, params[key])
        })
      }

      uploadRequest.end((err, response) => {
        if (err){
          reject(err)
          return
        }

        const uploaded = response.body        
        console.log('FILE UPLOAD SUCCESS: ' + JSON.stringify(uploaded))
        resolve(uploaded)
      })
    })
  }

}