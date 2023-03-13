const { connect, connection } = require("mongoose");
//? I believe there is something up with the connection 🤷🏾‍♂️, but i will figure it,
//! unfortunately, for now im turning this in as is...

const connectionString = async () => {
  try {
    await connect(
      connectionString,
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectionString;
