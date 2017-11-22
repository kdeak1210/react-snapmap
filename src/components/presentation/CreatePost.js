import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class CreatePost extends Component {

  constructor(){
    super()
    this.state = {
      post: {
        image: '',
        caption: ''
      }
    }

    this.updatePost = this.updatePost.bind(this)
    this.submitPost = this.submitPost.bind(this)
  }

  updatePost(event){
    event.preventDefault
    let updated = Object.assign({}, this.state.post)
    updated[event.target.id] = event.target.value
    this.setState({
      post: updated
    })
  }

  submitPost(){
    console.log('Submit Post: ' + JSON.stringify(this.state.post))
    let updated = Object.assign({}, this.state.post)
    this.props.onCreate(updated)
  }

  render(){
    return(
      <div>
        Create Post
        <Dropzone style={{border:'none'}}>
          <button>Upload Image</button>
        </Dropzone>
        <input id="caption" onChange={this.updatePost} type="text" placeholder="Caption" />
        <button onClick={this.submitPost}>Submit</button>
      </div>
    )
  }
}

export default CreatePost