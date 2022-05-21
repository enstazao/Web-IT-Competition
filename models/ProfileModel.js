const { model, Schema } = require("mongoose");

const profileSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    stars:{
      type: Number,
      default: 0
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("profile", profileSchema);
