import jwt from 'jsonwebtoken';
import config from '../config';

function loginUser(req: any, res: any) {
  if (req.body && req.body.username) {
    const token = jwt.sign(req.body, config.TOKEN_SECRET, {
      expiresIn: config.TOKEN_EXPIRE
    });

    return res.status(200).send({
      token: token
    });
  }
  return res.status(403).send({ reason: 'Missing credentials' });
}

export default loginUser;
