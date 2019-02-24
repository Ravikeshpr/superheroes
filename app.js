const express = require("express");
var bodyParser = require("body-parser");
var app = express();
const _staticPath = "../wdp-code/build";
const _mockPath = "./mockDB";

const PORT = 8080;

const sendJSON = (res, file) => {
  res.sendFile(file + ".json", { root: _mockPath });
};

app.use(express.static(_staticPath));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/heroes", (req, res) => {
  sendJSON(res, "heroes");
});

app.listen(PORT, () =>
  console.log(`app runnig on port ${PORT}. Access http://localhost:${PORT}`)
);
