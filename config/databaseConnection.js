const mongoose = require("mongoose");

const connectDB = () => {
  const db = process.env.DB_CONNECTION;
  return mongoose.connect(db).then(() => {
    console.log("DB Connect Successfully");
  });
};

module.exports = connectDB;
