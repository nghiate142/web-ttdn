const users = require('../model/user.model');
const db = require("../db/index");
const constants = require("constants");

class AuthController {
    async login(req, res) {
        const username = req.body.username
        const password = req.body.password
    }
}

module.exports = new AuthController();