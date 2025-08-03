const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const dbConnection = require("./config/databaseConnection");

dbConnection();

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
