const {Schema, model, Types} = require('mongoose');

const eventModel = new Schema(
  {
    titleUa: { type: String },
    contentUa: { type: String},
    titleEn: { type: String },
    contentEn: { type: String },
    date: { type: Date, default: Date.now},
    competition: {type: String },
    eventBackgroundImage:{ type: String},
    eventGallery:[ String ],
  },
  {
    versionKey: false,
    collection: "events"
  }
);

module.exports = model("eventModel", eventModel);