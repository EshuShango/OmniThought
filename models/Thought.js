const { Schema, model, Types } = require("mongoose");
//* or 
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const dayjs = require('dayjs');
const reactionSchema = require("./Reaction");
const { virtuals } = require("../../../lessons/18-NoSQL/01-Activities/28-Stu_Mini-Project/Main/models/Assignment");

const thoughtSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId

    },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      macLength:280
    }, 
    createdAt: {
      type: Date,
      default: Date.now,
      get: value => dayjs(value).format("MMMM, DDDD, YYYY, [at] hh:mm a")
    },
    usrName: {
      type:String,
      required: true
    },
    {
      reactions: [reactionSchema]
    }
    {
      toJSON: {
        virtuals: true,
        getters: true,
            }
    }, 
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get( () => {
  return this.reactions.lenght;
});

const Thought = mode("Thought", thoughtSchema);

export default = model("Thought", thoughtSD);