const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
<<<<<<< HEAD
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `${contactId} is not valid ID`));
    }
    next()
=======
	const { contactId } = req.params;
	if (!isValidObjectId(contactId)) {
		next(HttpError(400, `${contactId} is not valid id`));
	}
	next();
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d
};
module.exports = isValidId;

