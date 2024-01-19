const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

function sign(payload){
  const token = jwt.sign(payload, secret, { expiresIn: '1d' });
  return token;
}

function verify(token) {
  const decoded = jwt.verify(token, secret);
  return decoded;
}

module.exports = {
  sign,
  verify,
};
