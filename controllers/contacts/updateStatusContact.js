const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (requirement, respose) => {
  if (!requirement.body) {
    throw HttpError(400, "Missing field favorite");
  }

  const { contactId } = requirement.params;
  const result = await Contact.findByIdAndUpdate(contactId, requirement.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return respose.status(200).json(result);
};

module.exports = updateStatusContact;
