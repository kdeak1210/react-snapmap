const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  profile: {type: mongoose.SchemaTypes.Mixed, default:{}},
  image: {type: String, default: ''},
  caption: {type: String, default: ''},
  timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('PostSchema', PostSchema)