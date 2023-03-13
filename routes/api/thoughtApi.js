const express = require("express");
const tR = express.Router();
//! may have to change back to router
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtCon");

tR.route("/").get(getThoughts).post(createThought);

tR.route("/:id").get(getSingleThought).put(updateThought).delete(deleteThought);

tR.route("/:id/reactions").post(addReaction);

tR.route("/:id/reactions/:reactionId").delete(removeReaction);

module.exports = tR;
