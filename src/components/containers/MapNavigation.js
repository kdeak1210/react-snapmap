import React, { Component } from 'react'
import { Map } from '../presentation'

class MapNavigation extends Component {
  
  render(){
    const center = {
      lat: 40.75,
      lng: -74.00
    }

    return(
      <div>
        <Map
          center={center}
          zoom={14}
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

export default MapNavigation