const {Schema, model, Types} = require('mongoose');

const clubProfileModel = new Schema(
  {
    nameUa: {type: String},
    nameEn: {type: String},
    uaDescription:{type:String},
    enDescription:{type:String},
    profileAvatar: { type: String },
    isOuner: { type: Boolean, default: false},
    achives: [ Array ]
  },
  {
    versionKey: false,
    collection: "clubMembers"
  }
);

module.exports = model("ProfileModel", clubProfileModel);