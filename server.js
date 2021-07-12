const express = require("express");
const app = express();
const uploadScene = require("./multer-middleware");
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is up.");
});

app.post("/uploadscene", uploadScene.single("scene"), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send("Please upload a file");
  res.status(200).send("uploaded successfully.");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
