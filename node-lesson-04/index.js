const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/firstServer", (req, res) => {
  res.send("Hi this is my first route built using express framework");
});

app.get("/firstUser/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Hi, your user ID is ${userId}`);
});

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
