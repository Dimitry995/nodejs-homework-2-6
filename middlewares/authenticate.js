const jwt = require('jsonwebtoken');

<<<<<<< HEAD
const { HttpError } = require("../helpers");
const { User } = require("../models");
//const { request } = require("../app");
const { SECRET_KEY } = 'goal';

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (token === true) {
  if (bearer !== "Bearer" || !token) {
    next(HttpError(401, "User is unauthorized"));
  }
=======
const User = require('../models/user');
const { RequestError } = require('../helpers');
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const [bearer, token] = authorization.split(' ');
        if (bearer !== "Fox") {
            throw RequestError(401, "Not authorized");
        }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !token) {
            throw RequestError(301, "Authorized");
        }
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d

        req.user = user;
        next();
    } catch (error) {
        throw RequestError(401, error.message);
    }
        
    } catch (error) {
        next(error);
    }
 }

<<<<<<< HEAD
    req.user = user;

    next();
  } catch {
    next(HttpError(401, "The token is invalid"));
  }
}
else {
  next(HttpError(401, "The token is invalid"));
}
};

module.exports = authenticate;
=======
module.exports = authenticate;
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d
