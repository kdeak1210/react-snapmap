import constants from '../constants'

var initialState = {
  currentLocation: {
    lat: 40.75,
    lng: -74.00
  },
  list: []
}

export default (state = initialState, action) => {
  let updatedState = Object.assign({}, state)

  switch (action.type) {
    case constants.POSTS_RECEIVED:
      console.log('POSTS_RECEIVED: ' + JSON.stringify(action.posts))

      updatedState['list'] = action.posts
      return updatedState

    case constants.CURRENT_LOCATION_CHANGED:
      console.log('CURRENT_LOCATION_CHANGED: ' + JSON.stringify(action.location))
      
      updatedState['currentLocation'] = action.location
      return updatedState

    default:
      return updatedState
  }
}