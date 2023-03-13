require('dotenv').config()
const jwt = require('jsonwebtoken')

function generateJWT(userObj) {
  return jwt.sign({...userObj}, process.env.JWT_SECRETE, {expiresIn: '1 day'})
} 

module.exports = generateJWT