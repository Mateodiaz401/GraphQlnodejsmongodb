const jwt = require('jsonwebtoken');

const createJWToken = user => {
    return jwt.sign({ user }, 'mateo98', { expiresIn: '1h' })
}

module.exports = {
    createJWToken
}