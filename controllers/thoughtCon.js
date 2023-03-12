const mongoose = require("mongoose");
const { Thought, User } = require("../models");

//we import/require the mongoose module/api
//we import/require the Thought, User Schema
//which from the Schema a model is created
//* a Schema is a blueprint or template,
//from which a model can be created (MongoDB)

//* Logic is written below, within the Controllers file
//* The Controllor

// Below we export the Module(A blueprint,
//a self contained block of code,
//provides specific func, encapsulating Var, Func, and Classes)
module.exports = {
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const updUsr = await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: thought_id } },
        { new: true }
      );
    } catch (error) {}
  },

  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};







//!--------------------------------------
//* it could be written as such too
// const createThought = async (req, res) => {
//   try {
//     const thought = await Thought.create(req.body);
//     const updatedUser = await User.findOneAndUpdate(
//       { username: req.body.username },
//       { $push: { thoughts: thought._id } },
//       { new: true }
//     );

//     if (!updatedUser) {
//       res.status(500).json({ message: "No user found with this username!" });
//       return;
//     }

//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

//* Functions are utilized within this controller program,
//* then exported for use

// module.exports = {
//   getThoughts,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought,
//   addReaction,
//   removeReaction,
// };
//!_______________________________________
