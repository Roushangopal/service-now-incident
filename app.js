const express = require("express");
const app = express();
const morgan = require('morgan');

/**importing routes */
const incident = require("./routes/incident");

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static("public"));

// Middleware
// express-session must be used before passport
app.use("/api/incident", incident);

module.exports = app;