const APP_SECRET = 'GraphQL-is-aw3some'
const jwt = require('jsonwebtoken')

/**
 * Returns user id if authorization toke is valid
 * 
 * @param {object} context 
 */
function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    // Extract token from header value
    const token = Authorization.replace('Bearer ', '')
    // Decoded payload has user id
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
}
