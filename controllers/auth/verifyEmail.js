const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const verifyEmail = async (requirement, response) => {
  const { verificationToken } = requirement.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  response.status(200).json({
    message: "Verification successful",
  });
};

module.exports = verifyEmail;
