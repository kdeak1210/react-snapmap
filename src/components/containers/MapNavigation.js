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
    // console.log('setNewLocation: ' + JSON.stringify(location))
    this.props.updateCurrentLocation(location)
  }

  render(){
    const posts = this.props.posts.list || []

    let markers = []
    posts.forEach((post, i) => {
      const latlng = {
        lat: post.geo[0],
        lng: post.geo[1]
      }

      const marker = {
        key: post.id,
        label: post.caption,
        position: latlng,
        defaultAnimation: 2
      }

      markers.push(marker)
    })

    return(
      <div>
        <Map
          center={this.props.posts.currentLocation}
          zoom={14}
          mapMoved={this.setNewLocation}
          containerElement={
            <div style={{ height: '100vh' }}/> 
          } 
          mapElement={
            <div style={{ height: '100%' }}/> 
          }
          markers={markers}
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
    updateCurrentLocation: (location) => dispatch(actions.updateCurrentLocation(location))
  }
}

export default connect(stateToProps, dispatchToProps)(MapNavigation)