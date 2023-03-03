require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connection=require("./config/db")
const {userrouter}=require("./Routes/user.route");
const { middleware } = require("./Middlewere/middleware");


app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Game");
});
 app.use(middleware);
app.use("/user",userrouter)









app.use("/games",GameRoute)

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Coonected to the database");
  } catch (err) {
    console.log("err", err);
  }
  console.log(`Server is live at PORT : ${process.env.port}`);
});
