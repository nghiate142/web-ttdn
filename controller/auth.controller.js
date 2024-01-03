const users = require('../model/users.model');
const db = require("../db/index");
const userService = require("../service/auth.service")

class AuthController {
    async login(req, res) {
        const data = req.body
        const auth = await userService.login(data)

    }
}

module.exports = new AuthController();