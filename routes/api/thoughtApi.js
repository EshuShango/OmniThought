const express = require("express");
const tR = express.Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtCon");

// /api/thought
tR.route("/").get(getThoughts).post(createThought);

// /api/thought/:id
tR
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/:id/reactions
tR.route("/:id/reactions").post(addReaction);

// /api/thought/:id/reactions/:reactionId
tR.route("/:id/reactions/:reactionId").delete(removeReaction);
