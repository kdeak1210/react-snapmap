const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  profile: {type: mongoose.SchemaTypes.Mixed, default:{}},
  image: {type: String, default: ''},
  caption: {type: String, default: ''},
  timestamp: {type: Date, default: Date.now}
})

PostSchema.methods.summary = function(){
  const summary = {
    profile: this.profile,
    image: this.image,
    caption: this.caption,
    timestamp: this.timestamp,
    id: this._id.toString()
  }

  return summary
}

module.exports = mongoose.model('PostSchema', PostSchema)