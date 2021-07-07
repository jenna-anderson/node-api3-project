function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log('very nice')
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log('user id validated')
  next()
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('user is validated')
  next()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('post is validated')
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}
