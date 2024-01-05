const users = require('../model/users.model');
const db = require("../db/index");
const userService = require("../service/auth.service")
const jwt = require('jsonwebtoken');

const loggedInUsers = {};

// Hàm đăng nhập
async function login(req, res) {
    const data = req.body;
    try {
        // Thực hiện kiểm tra tài khoản ở userService
        const user = await userService.login(data);

        // Tạo access token với thời hạn 30 giây
        const accessToken = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '30s' });

        // Lưu token của người dùng vào danh sách đăng nhập
        loggedInUsers[user.id] = accessToken;

        // Trả về token và thông báo thành công
        res.status(200).json({
            message: 'Login success',
            status: 200,
            token: accessToken,
        });
    } catch (error) {
        // Xử lý lỗi khi đăng nhập không thành công
        res.status(404).json({
            message: 'User or password not found',
            status: 404,
        });
    }
}

// Hàm đăng xuất
function logout(userId) {
    // Xóa token của người dùng khi đăng xuất
    delete loggedInUsers[userId];
}

// Middleware kiểm tra token trước mỗi request
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
