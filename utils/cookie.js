const generateJWT = require("./jwt");

function generateCookie(user, res) {
 user.password = null
 const jwt = generateJWT(user)
 const options = {
    expires: new Date(Date.now() + 1000 * 60 * 60 ),
    httpOnly: true
 }

 res.status(200).cookie('ecommerce-cookie', user, options).json({success: true, jwt})
}

module.exports = generateCookie