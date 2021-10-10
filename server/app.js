const express = require("express");
const app = express();
require("dotenv").config();

// Database
require("./config/db");

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const api = require("./routes/player.router");
app.use("/api", api);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening from port ${PORT}`));
