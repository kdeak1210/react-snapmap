import React, { Component } from 'react'
import { Map } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class MapNavigation extends Component {
  
  constructor(){
    super()
    this.setNewLocation = this.setNewLocation.bind(this)
  }

  setNewLocation(location){
    console.log('setNewLocation: ' + JSON.stringify(location))
  }

  render(){
    // const center = {
    //   lat: 40.75,
    //   lng: -74.00
    // }

    return(
      <div>
        <Map
          center={this.props.posts.currentLocation}
          zoom={14}
          mapMoved={this.setNewLocation}
          containerElement={
            <div style={{ height: '800px' }}/> 
          } 
          mapElement={
            <div style={{ height: '100%' }}/> 
          } 
        />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    posts: state.post,   
  }
}

const dispatchToProps = (dispatch) => {
  return {
    // updateCurrentLocation: (location) => dispatch(actions.updateCurrentLocation(location))
  }
}

export default connect(stateToProps, dispatchToProps)(MapNavigation)