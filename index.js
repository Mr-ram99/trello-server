const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const { connectMongoDB } = require("./connection");
const dotenv = require("dotenv");
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const PORT = 3001;

connectMongoDB(process.env.DATABASE_URL);

app.listen(PORT, () => {
  console.log("server listening at port", PORT);
});

app.get("/", (req, res) => res.send("hi"));
