import React, { Component } from 'react'

class Register extends Component{
  constructor(){
    super()
    this.state = {
      registration: {
        username: '',
        password: ''
      }
    }
  }

  updateRegistration(field, event){
    //console.log(`UpdateReg: ${field} - ${event.target.value}`);
    let updated = Object.assign({}, this.state.registration)
    updated[field] = event.target.value
    this.setState({
      registration: updated
    })
  }

  submitRegistration(){
    const { registration } = this.state
    if (registration.username.length == 0){
      alert('Please supply a username!')
      return
    }

    if (registration.password.length == 0){
      alert('Please supply a password!')
      return
    }

    this.props.onRegister(registration) // send it up to the container
  }

  render(){
    return(
      <div>
        <h3>Sign up</h3>
        <input onChange={this.updateRegistration.bind(this, 'username')} type="text" placeholder="username" /><br />
        <input onChange={this.updateRegistration.bind(this, 'password')} type="password" placeholder="password" /><br />
        <button onClick={this.submitRegistration.bind(this)}>Join</button>          
      </div>
    )
  }
}

export default Register