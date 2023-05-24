
const jwt = require('jsonwebtoken');

const secret = 'mysecretshhh';
const expiration = '2h'; // Token will last for 2 hrs

// On sign in the email, username, and _id are passed in to create and return the JWT auth token
module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
