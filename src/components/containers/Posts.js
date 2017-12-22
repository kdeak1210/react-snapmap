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

    this.props.fetchPosts(null)
  }

  componentDidUpdate(){
    console.log('CDU - Posts')

    // check if the list is null (time to make another API call)
    if (this.props.posts.list == null) {
      this.props.fetchPosts(null)
    }
  }

  submitPost(post){
    const { currentLocation } = this.props.posts
    post['geo'] = [ // This array format is required for mongo geospatial query
      currentLocation.lat,
      currentLocation.lng
    ]

    console.log('submitPost: ' + JSON.stringify(post))
    this.props.createPost(post)
  }

  render(){
    const list = this.props.posts.list

    // const list = this.props.posts.list.map((post, i) => {
    //   return (
    //     <li key={post.id}>{post.caption}</li>
    //   )
    // })

    return(
      <div>
        <CreatePost onCreate={this.submitPost}/>      
        <ol>
          { (list == null) ? null : 
            list.map((post, i) => {
              return (
                <li key={post.id}>{post.caption}</li>
              )
            })
          }
        </ol>
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
    fetchPosts: (params) => dispatch(actions.fetchPosts(params)),
    createPost: (params) => dispatch(actions.createPost(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Posts)