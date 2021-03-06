import React, { Component } from 'react'
import { CreatePost } from '../presentation'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Posts extends Component {

  constructor(){
    super()
    this.submitPost = this.submitPost.bind(this)
  }

  componentDidMount(){
    console.log('CDM - Posts')
    const { currentLocation } = this.props.posts
    this.props.fetchPosts(currentLocation)  // currentLocation object already formatted properly
  }

  componentDidUpdate(){
    console.log('CDU - Posts')
    const { currentLocation } = this.props.posts    

    // check if the list is null (time to make another API call)
    if (this.props.posts.list == null) {
      this.props.fetchPosts(currentLocation)
    }
  }

  submitPost(post){
    const user = this.props.account.user
    if (user == null){
      alert('Sign up or login before submitting a post')
      return
    }

    post['profile'] = {
      id: user.id,
      username: user.username
    }

    const { currentLocation } = this.props.posts
    post['geo'] = [ // This array format is required for mongo geospatial query
      currentLocation.lat,
      currentLocation.lng
    ]

    console.log('submitPost: ' + JSON.stringify(post))
    this.props.createPost(post)
  }

  render(){
    const list = this.props.posts.list || []

    return(
      <div>
        <CreatePost onCreate={this.submitPost}/>

        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>Image</th><th>Caption</th><th>From</th>
              </tr>
            </thead>
            <tbody>
              { (list == null) 
                ? null 
                : list.map((post, i) => {
                  return (
                    <tr key={post.id}>
                      <td><img style={{width:64}} src={post.image} /></td>
                      <td>{post.caption}</td>
                      <td>{post.profile.username}</td>                      
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    posts: state.post,
    account: state.account
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchPosts: (params) => dispatch(actions.fetchPosts(params)),
    createPost: (params) => dispatch(actions.createPost(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Posts)