const thoughtSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()

    },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength:280
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
    
    reactions: [reactionSchema]
  }, // add a comma here
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

thoughtSchema.virtual("reactionCount").get( () => {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
