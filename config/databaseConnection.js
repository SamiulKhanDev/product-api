const { dbUrl } = require("./configEnv");
// console.log(obj);

// console.log(dbUrl);

const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDb;
