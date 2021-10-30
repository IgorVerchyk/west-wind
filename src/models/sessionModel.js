const {Schema, model, Types} = require('mongoose');

const sessionModel = new Schema(
  {
    date: { type: Number},
    publications:[String]
  },
  {
    versionKey: false,
    collection: "sessions"
  }
);

module.exports = model("sessionModel", sessionModel);