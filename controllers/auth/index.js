const { cntrlWrapper } = require("../../helpers");

module.exports = {
  register: cntrlWrapper(require("./register")),
  verifyEmail: cntrlWrapper(require("./verifyEmail")),
  resendVerifyEmail: cntrlWrapper(require("./resendVerifyEmail")),
  login: cntrlWrapper(require("./login")),
  getCurrentUser: cntrlWrapper(require("./getCurrentUser")),
  logout: cntrlWrapper(require("./logout")),
  updateSubscription: cntrlWrapper(require("./updateSubscription")),
  updateAvatar: cntrlWrapper(require("./updateAvatar")),
};
