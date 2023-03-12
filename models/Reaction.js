const dayjs = require("dayjs");
const { Schema, Types } = require("mongoose");
// const reactionSchema = require("./Reaction");

const reactionSchema = new Schema(
  {
    reaction_Id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Dat.now,
      get: (value) => dayjs(value).format("MMMM, DDDD, YYYY, [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// const User = model("User", userSchema);

module.exports = reactionSchema;
