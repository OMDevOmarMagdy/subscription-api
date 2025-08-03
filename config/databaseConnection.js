const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
