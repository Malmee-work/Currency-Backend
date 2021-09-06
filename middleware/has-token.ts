import jwt from 'jsonwebtoken';
import config from '../config';
import { requestLimiter } from './request-limiter';

function hasToken(req: any, res: any, next: any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({ reason: 'Missing access token' });
  }

  jwt.verify(token, config.TOKEN_SECRET, (err: any) => {
    if (err) {
      return res.status(401).send({ reason: 'Token is invalid' });
    }
    requestLimiter(token, res, next);
  });
}

export default hasToken;
