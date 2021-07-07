function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`METHOD: ${req.method}, URL: ${req.baseUrl}, TIMESTAMP: ${new Date(Date.now())}`)
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

function notFound(req, res, next) {
  res.status(404).json({
    message: 'not found, sorry!'
  })
}

function errorHandling(err, req, res, next) {
  const status = err.status || 500
  res.status(status).json({
    message: err.message
  })
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
  notFound,
  errorHandling
}
