import constants from '../constants'
import { APIManager } from '../utils'

export default {

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
        console.log(err)
      })
    }

  },

  postsReceived: (posts) => {
    return {
      type: constants.POSTS_RECEIVED,
      posts: posts
    }
  },

}