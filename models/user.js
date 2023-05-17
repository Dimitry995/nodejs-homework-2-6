<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

<<<<<<< HEAD
const {
  handleMongooseError,
  patterns,
  templatesMsgJoi,
} = require("../helpers");

const SUBSCRIPTION_TYPES = ["starter", "pro", "business"];

// registration validation user
const validationRegistrationUser = Joi.object({
  password: Joi.string().required().messages(templatesMsgJoi("password")),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(patterns.emailPattern)
    .required()
    .messages(templatesMsgJoi("email")),
  subscription: Joi.string().valid(...SUBSCRIPTION_TYPES),
});

// login validation user
const validationLoginUser = Joi.object({
  password: Joi.string().required().messages(templatesMsgJoi("password")),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(patterns.emailPattern)
    .required()
    .messages(templatesMsgJoi("email")),
  subscription: Joi.string().valid(...SUBSCRIPTION_TYPES),
});
=======
const users = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
  },
});

const hashPassword = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(pass, salt);
  return hashedPassword;
};
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d

const User = mongoose.model("user", users);

<<<<<<< HEAD
// validation email
const validationEmailUser = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(patterns.emailPattern)
    .required()
    .messages(templatesMsgJoi("email")),
});

// mongoose Schema
const userSchema = new Schema(
  {
=======
module.exports = { User, hashPassword };
=======
=======
>>>>>>> master
const {Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers')
const joi = require("joi");

const emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema({
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: emailFormat,
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
<<<<<<< HEAD
    token: {
      type: String,
      default: "",
    },
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);
=======
    token: String
}, { versionKey: false, timestamps: true });
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d

userSchema.post("save", handleSaveErrors);

<<<<<<< HEAD
module.exports = {
  User,
  validationRegistrationUser,
  validationLoginUser,
  validationSubscription,
  validationEmailUser,
};
=======
 const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().pattern(emailFormat).required(),
    password: joi.string().min(6).required(),

  })

  const loginSchema = joi.object({
    email: joi.string().pattern(emailFormat).required(),
    password: joi.string().min(6).required(),
  })

  const schemas = {
    registerSchema,
    loginSchema
  }

  const User = model("user", userSchema);

  module.exports = {
    schemas,
    User
<<<<<<< HEAD
  }
>>>>>>> 03ddca3ab856225ac93889b1ec630c997ac37fef
=======
  }
>>>>>>> master
>>>>>>> 149d037b901c496217c28487456525c1fc612d2d
