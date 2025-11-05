import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const nuLet= req.body["fName"].length + req.body["lName"].length;
  console.log(nuLet);
  res.render("index.ejs", {numberOfletters:nuLet});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
