const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/userRouter.js");

dotenv.config();

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.urlencoded({extended:true}))

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.use(userRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
