const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hung100097:kXM8RRd6jWFKb7ss@hungdeptrai.nlwmnp2.mongodb.net/webraucu?retryWrites=true&w=majority&appName=HungDepTrai",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect failure");
  }
}

module.exports = { connect };
