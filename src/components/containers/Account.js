import React, { Component } from 'react'
import { Register } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component{

  register(registration){
    console.log('register: ' + JSON.stringify(registration))
    this.props.register(registration)
  }

  render(){
    const { user } = this.props.account
    return(
      <div>
        ACCOUNT CONTAINER
        { (user == null)
          ? <Register onRegister={this.register.bind(this)}/>
          : <p>Hello {user.username}</p>
        }
        
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    account: state.account
  }
}

const dispatchToProps = (dispatch) => {
  return {
    register: (params) => dispatch(actions.register(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Account)