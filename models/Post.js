const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  profile: {type: mongoose.SchemaTypes.Mixed, default:{}},
  image: {type: String, default: ''},
  caption: {type: String, default: ''},
  geo: {
    type: [Number], // array of numbers
    index: '2d'     // allows 2d geospatial queries for mongoose
  },
  timestamp: {type: Date, default: Date.now}
})

PostSchema.methods.summary = function(){
  const summary = {
    profile: this.profile,
    image: this.image,
    caption: this.caption,
    geo: this.geo,
    timestamp: this.timestamp,
    id: this._id.toString()
  }

  return summary
}

module.exports = mongoose.model('PostSchema', PostSchema)