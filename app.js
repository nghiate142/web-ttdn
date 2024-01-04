const express = require('express');
const bodyParser = require('body-parser');
const db = require("./db/index");
const morgan = require('morgan');

require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require('./routes/user.router');
const authRoutes = require('./routes/auth.router');
const categoryRouter = require('./routes/category.router');
const newRouter = require('./routes/new.router');

(async () => {
    await db.sequelize.sync();
})();

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/category", categoryRouter);
app.use("/new", newRouter);
app.listen(port);
