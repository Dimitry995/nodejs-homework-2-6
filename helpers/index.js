const HttpError = require("./HttpError");
<<<<<<< HEAD
const cntrlWrapper = require("./cntrlWrapper");
const handleMongooseError = require("./handleMongooseError");
const patterns = require("./patterns");
const modifyImage = require("./modifyImage");
const sendEmail = require("./sendEmail");
const templatesMsgJoi = require("./templatesMsgJoi");

module.exports = {
  HttpError,
  cntrlWrapper,
  handleMongooseError,
  patterns,
  modifyImage,
  sendEmail,
  templatesMsgJoi,
};
=======
const RequestError = require('./RequestError');
const handleSaveErrors = require('./handleSaveErrors');
<<<<<<< HEAD
const cntrlWrapper = require('./cntrlWrapper');
=======

module.exports = {
    RequestError,
    handleSaveErrors,
=======
const HttpError = require("./HttpError");
const cntrlWrapper = require('../controllers/cntrlWrapper');
>>>>>>> b2b353669b449349822edecb08b428e80cfd37d8
const handleMongooseError = require("./handleMongooseError");

module.exports = {
    HttpError,
    RequestError,
    handleSaveErrors,
    cntrlWrapper,
<<<<<<< HEAD
    handleMongooseError,
}
=======
    handleMongooseError
<<<<<<< HEAD
=======
=======
const cntrlWrapper = require('./cntrlWrapper')

module.exports = {
    HttpError,
    cntrlWrapper
>>>>>>> master
>>>>>>> master
>>>>>>> master
}
>>>>>>> b2b353669b449349822edecb08b428e80cfd37d8
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d
