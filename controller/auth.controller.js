const users = require('../model/users.model');
const db = require("../db/index");
const userService = require("../service/auth.service")

class AuthController {
    async login(req, res) {
        const data = req.body
        try {
            await userService.login(data)
            res.status(200).json({
                message: 'login success',
                status: 200
            })
        } catch (error) {
            res.status(404).json({
                message: 'user or password not found',
                status: 404,
            })
        }
    }
}

module.exports = new AuthController();