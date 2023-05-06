const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (requirement, response) => {
  const { email } = requirement.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  await sendEmail(email, user.verificationToken);

  return response.status(200).json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
