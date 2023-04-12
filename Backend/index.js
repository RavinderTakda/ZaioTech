const express = require("express");
const cors = require("cors");
const { connection, ZaioModel } = require("./Config/db.js");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.post("/insertdata", async (req, res) => {
  console.log(req.body);
  const result = await ZaioModel.insertMany(req.body);

  res.send(result);
});

app.get("/Zaiodata", async (req, res) => {
  const Za = await ZaioModel.find();
  res.send(Za);
});

app.listen(process.env.PORT, async () => {
  try {
    await connection, console.log("Connection to Mongodb Successfull");
  } catch (err) {
    console.log("Error connection to db");
  }
  console.log("Listening to server");
});
