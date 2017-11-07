import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Posts } from './components/containers'
import store from './stores'
import { Provider } from 'react-redux'

const App = () => {
  return(
    <Provider store={ store.configureStore() }>
      <div>
        React Here!
        <Posts />
      </div>  
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))