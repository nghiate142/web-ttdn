const express = require('express');
const bodyParser = require('body-parser');
const db = require("./db/index");
const morgan = require('morgan');
const { sequelize } = require('./db/index');
const userRoutes = require('./routes/user.router');

require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = require("./routes/user.router");

app.use("/user", user);

(async () => {
    await db.sequelize.sync();
})();
const server = app.listen(port, () => {
});
