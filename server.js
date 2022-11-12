require("dotenv").config();
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.header('origin') 
|| req.header('x-forwarded-host') || req.header('referer') || req.header('host'));
  next();
})
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
