import jwt from 'jsonwebtoken';
// i have to put here process.env.JWT_SECRET ='abc123'

const generateToken = (id) => {
  return jwt.sign({ id }, 'abc123', {
    expiresIn: '30d',
  });
};

export default generateToken;
