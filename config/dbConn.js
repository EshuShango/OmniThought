const { connect, connection } = require("mongoose");

// const connectionString =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//* After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
//* Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

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
