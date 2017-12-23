import React, { Component } from 'react'
import { Account, Posts, MapNavigation } from '../containers'

class Home extends Component {
  render(){
    return(
      <div>
        <header id="header" style={{padding: 0}}>
            <MapNavigation />
        </header>

        <div id="main">
          <section id="one">

            <div className="row">
              <div className="8u 12u$(small)">
					      <Posts />  
              </div>

              <div className="4u 12u$(small)">
                <Account />
              </div>

            </div>
          </section>

			  </div>

      </div>      
    )
  }
}

export default Home