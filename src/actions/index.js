import constants from '../constants'
import { APIManager } from '../utils'

export default {

  updateCurrentLocation: (location) => {
    return {
      type: constants.CURRENT_LOCATION_CHANGED,
      location: location
    }
  },

  register: (params) => {
    return (dispatch) => {

      APIManager
      .post('/account/register', params)
      .then(response => {
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
      })
      .catch(err => console.log(err))
    }
  },

  login: (params) => {
    return (dispatch) => {

      APIManager
      .post('/account/login', params)
      .then(response => {
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
      })
      .catch(err => console.log(err))
    }
  },

  checkCurrentUser: () => {
    return (dispatch) => {

      APIManager
      .get('/account/currentuser', null)
      .then(response => {
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
      })
      .catch(err => console.log(err))

    }
  },

  logout: () => {
    return (dispatch) => {

      APIManager
      .get('/account/logout', null)
      .then(response => {
        dispatch({
          type: constants.USER_LOGGED_OUT,
          user: response.user
        })
      })
      .catch(err => console.log(err))

    }
  },

  createPost: (params) => {
    return (dispatch) => {

      APIManager
      .post('/api/post', params)
      .then((response) => {
        console.log(response)
        // dispatch({

        // })
      })
      .catch((err) => {
        console.log('ERROR: ' + err)
      })
    }
  },

  fetchPosts: (params) => {    
    return (dispatch) => {

      APIManager
      .get('/api/post', null)
      .then((response) => {
        console.log(response)
        dispatch({
          type: constants.POSTS_RECEIVED,
          posts: response.results
        })
      })
      .catch((err) => {
        console.log('ERROR: ' + err)
      })
    }
  },

  // postsReceived: (posts) => {
  //   return {
  //     type: constants.POSTS_RECEIVED,
  //     posts: posts
  //   }
  // },

}