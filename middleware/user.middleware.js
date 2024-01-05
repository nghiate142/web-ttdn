
class UserMiddleware {
    async validateUserDataCreate(req, res, next){
        const userData = req.body;
        if (!userData.username || !userData.password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        next();
    }

    async validateUserDataUpdate(req, res, next){
        const userData = req.body;
        if (!userData.password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        next();
    }
}

module.exports = new UserMiddleware()