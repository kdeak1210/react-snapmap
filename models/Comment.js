const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
  profile: {type: mongoose.SchemaTypes.Mixed, default:{}},
  post: {type: String, default: ''},
  text: {type: String, default: ''},
  timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('CommentSchema', CommentSchema)