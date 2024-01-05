const users = require('../model/users.model');
const db = require("../db/index");
const userService = require("../service/auth.service")
const jwt = require('jsonwebtoken');

const loggedInUsers = {};

async function login(req, res) {
    const data = req.body;
    try {
        const user = await userService.login(data);
        const accessToken = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '24h' });
        loggedInUsers[user.id] = accessToken;
        res.status(200).json({
            message: 'Login success',
            status: 200,
            token: accessToken,
        });
    } catch (error) {
        res.status(404).json({
            message: 'User or password not found',
            status: 404,
        });
    }
}

function logout(userId) {
    delete loggedInUsers[userId];
}

function checkToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized: Missing token',
            status: 401,
        });
    }

    try {
        const payload = jwt.verify(token, 'your-secret-key');
        if (loggedInUsers[payload.userId] === token) {
            req.userId = payload.userId;
            next();
        } else {
            return res.status(401).json({
                message: 'Unauthorized: Invalid token',
                status: 401,
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized: Invalid token',
            status: 401,
        });
    }
}

module.exports = { login, logout, checkToken };
