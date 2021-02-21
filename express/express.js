const express = require("express");
const socket = require("socket.io");

const app = express();
app.use(express.static("./public"));
const port = 2021;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = socket(server);

module.exports = io