import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Posts extends Component {

  componentDidMount(){
    console.log('CDM - Posts')
    this.props.fetchPosts(null)
  }

  render(){
    return(
      <div>
        Posts Component
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    posts: state.post
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchPosts: (params) => dispatch(actions.fetchPosts(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Posts)