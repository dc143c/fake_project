const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign({params}, authConfig.secret);
}

module.exports = generateToken;