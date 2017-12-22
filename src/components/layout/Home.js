import React, { Component } from 'react'
import { Account, Posts, MapNavigation } from '../containers'

class Home extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <MapNavigation />

          </div>

          <div className="col-md-6">
            <Posts />

          </div>
          
          <div className="col-md-3">
            <Account /> 

          </div>          
        </div>
      </div>
    )
  }
}

export default Home