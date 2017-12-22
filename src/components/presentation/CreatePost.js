import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

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
    this.imageSelected = this.imageSelected.bind(this)    
  }

  updatePost(event){
    event.preventDefault
    let updated = Object.assign({}, this.state.post)
    updated[event.target.id] = event.target.value
    this.setState({
      post: updated
    })
  }

  imageSelected(files){
    /** TODO: Abstract away to a ImageHelper class that abstracts away and prepares the uplaod */
    const image = files[0]

    const cloudName = 'dnwmzfbqm'
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

    const timestamp = Date.now() / 1000 // (in seconds)
    const uploadPreset = 'vswzngdy'     // secret 'key', uses my presets in lieu of params

    const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}4grGkL9pRl1sgGqy3EP4E-rGXzM`

    const signature = sha1(paramsStr) // cloudinary requires sha1
    const params = {
      'api_key': '845422133677469',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    APIManager.uploadFile(url, image, params)
    .then(result => {
      console.log('Upload Finished: ' + JSON.stringify(result))
      
      // Update the 'post' local state with the image_url
      let updated = Object.assign({}, this.state.post)
      updated['image'] = result.secure_url
      this.setState({
        post: updated
      })
    })
    .catch(err => console.log(err))

  }

  submitPost(){
    console.log('Submit Post: ' + JSON.stringify(this.state.post))

    if (this.state.post.image.length == 0){
      alert('Please upload an image first!')
      return
    }

    if (this.state.post.caption.length == 0){
      alert('Please write a caption first!')
      return
    }

    let updated = Object.assign({}, this.state.post)
    this.props.onCreate(updated)
  }

  render(){
    return(
      <div>
        Create Post
        <Dropzone onDrop={this.imageSelected} style={{border:'none'}}>
          <button>Upload Image</button>
        </Dropzone>
        <input id="caption" onChange={this.updatePost} type="text" placeholder="Caption" />
        <button onClick={this.submitPost}>Submit</button>
      </div>
    )
  }
}

export default CreatePost