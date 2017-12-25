import React, { Component } from 'react'
import { Authenticate } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component {

  componentDidMount(){
    if (this.props.account.user == null){
      this.props.checkCurrentUser()
    }
  }

  register(registration){
    console.log('register: ' + JSON.stringify(registration))
    this.props.register(registration)
  }

  login(credentials){
    console.log('login: ' + JSON.stringify(credentials))
    this.props.login(credentials)
  }

  logout(){
    console.log('logout')
    this.props.logout()
  }

  render(){
    const { user } = this.props.account
    return(
      <div>
        ACCOUNT CONTAINER
        { (user == null)
          ? <Authenticate onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/>
          : <p>Hello {user.username}<button onClick={this.logout.bind(this)}>Logout</button></p>
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
    checkCurrentUser: () => dispatch(actions.checkCurrentUser()),
    login: (params) => dispatch(actions.login(params)),
    logout: () => dispatch(actions.logout()),
    register: (params) => dispatch(actions.register(params))    
  }
}

export default connect(stateToProps, dispatchToProps)(Account)