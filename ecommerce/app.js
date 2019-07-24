const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

//import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const braintreeRoutes = require("./routes/braintree");
const orderRoutes = require("./routes/order");

const app = express();

// db
// conectandome a la bd de mi cluster (nodeapi)
/*
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected Atlas"));
mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});
*/
//conectando a mi mongodb local
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Database Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", braintreeRoutes);
app.use("/api", orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
