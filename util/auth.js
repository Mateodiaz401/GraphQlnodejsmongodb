const jwt = require('jsonwebtoken');

const createJWToken = user => {
    return jwt.sign({ user }, 'mateo98756', { expiresIn: '1d' })
}

module.exports = {
    createJWToken
}