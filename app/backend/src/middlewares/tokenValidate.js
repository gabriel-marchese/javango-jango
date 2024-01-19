const jwt = require('../utils/jwt');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authorization.replace('Bearer ', '');
    const newToken = jwt.verify(token);
    res.locals.user = newToken;
    return next();
  } catch (err) {
    res.status(401).json({ message: 'Token must be a valid token' });
  }
};

module.exports = {
  validateToken,
};

