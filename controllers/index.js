const CommentController = require('./CommentController')
const PostController = require('./PostController')
const ProfileController = require('./ProfileController')

module.exports = {
  comment: CommentController,
  post: PostController,
  profile: ProfileController
}