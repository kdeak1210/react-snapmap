import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Posts } from './components/containers'

const App = () => {
  return(
    <div>
      Hello React!
      <Posts />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))