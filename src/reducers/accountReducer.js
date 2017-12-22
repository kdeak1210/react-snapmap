import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)

  switch(action.type){
    case constants.CURRENT_USER_RECEIVED:
      console.log('CURRENT_USER_RECEIVED: ' + JSON.stringify(action.user))
      updated['user'] = action.user
      return updated

    case constants.USER_LOGGED_OUT:
      console.log('USER_LOGGED_OUT: ');
      updated['user'] = action.user
      return updated

    default:
      return updated
  }

}