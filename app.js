const express = require('express');
const bodyParser = require('body-parser');
const db = require("./db/index");
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




const userRoutes = require('./routes/user.router');
const authRoutes = require('./routes/auth.router');
const categoryRouter = require('./routes/category.router');
const newRouter = require('./routes/new.router');
const imageRouter = require('./routes/image.router');
const audioRouter = require('./routes/audio.router');
const linkRouter = require('./routes/link.router');
const videoRouter = require('./routes/video.router');

(async () => {
    await db.sequelize.sync();
})();


app.use(async (req, res, next) => {
    try {
        await db.models.accessLog.create({
            ipAddress: req.ip,
            method: req.method,
            path: req.path,
        });
        next();
    } catch (error) {
        console.error('Error saving access log:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/log-length', async (req, res) => {
    const accessLogs = await db.models.accessLog.findAll();
    res.send(`Number of accesses: ${accessLogs.length}`);
});

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/category", categoryRouter);
app.use("/new", newRouter);
app.use("/upload-image", imageRouter);
app.use("/audio", audioRouter);
app.use("/link", linkRouter);
app.use('/upload-video', videoRouter);


app.listen(port);
