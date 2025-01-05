const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("home");
});

app.use(expressLayouts);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
