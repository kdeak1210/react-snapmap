import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Posts extends Component {

  componentDidMount(){
    console.log('CDM - Posts');

    APIManager.get('/api/post', null)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      alert(err)
    })
    
  }

  render(){
    return(
      <div>
        Posts Component
      </div>
    )
  }
}

export default Posts