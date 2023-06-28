import jwt from 'jsonwebtoken';

export const jwtValidation =  (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader.split(' ')[1];
  const isValidToken = jwt.verify(token, process.env.secret_key_jwt);
    if(isValidToken) {
        req.user = isValidToken;
        next();
    }
    res.status(401).json({message: "Autentication failed"});
}