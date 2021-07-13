const express = require("express");
const app = express();
const uploadScene = require("./multer-middleware");
const cors = require("cors");
const fs = require("fs");
const util = require("util");
const readdir = util.promisify(fs.readdir);

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

app.get("/scenelist", async (req, res) => {
  let scenes = await readdir("./public/scenes/");
  scenes = scenes.map((file) => file.slice(0, -4));
  return res.status(200).send(scenes);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
