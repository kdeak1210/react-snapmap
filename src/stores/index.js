import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { postReducer } from '../reducers'
import { accountReducer } from '../reducers'

var store;

export default {
  configureStore: () => {
    const reducers = combineReducers({
      account: accountReducer,
      post: postReducer
    })

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }
}