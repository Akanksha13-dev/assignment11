const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path=require('path');

const app = express();


var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");
db.sequelize.sync();


const PORT = process.env.PORT || 9000;

require("./app/routes/route")(app);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});