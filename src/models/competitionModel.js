const {Schema, model} = require('mongoose');

const competitionModel = new Schema(
  {
    backgroundImage:{ type: String},
    competitionTitleUk: { type: String, require: true },
    competitionTitleEn: { type: String, require: true },
    date: { type: Date, default: Date.now},
    rases:{type:String}
  },
  {
    versionKey: false,
    collection: "competitions"
  }
);

module.exports = model("CompetitionModel", competitionModel);