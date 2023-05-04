const { HTTPError } = require("../helpers");

const validateBody = (schema) => {
  const func = (requirement, response, next) => {
    const { error } = schema.validate(requirement.body);
    if (error) {
      next(HTTPError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;