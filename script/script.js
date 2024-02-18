const db = require("../db/index");
const bcrypt = require("bcryptjs");

async function createUser(dataUser) {
    const salt = bcrypt.genSaltSync(10);
    dataUser.password = await bcrypt.hashSync(dataUser.password, salt)
    await db.models.Users.create(dataUser)
}

async function createCategory(category) {
    for (let i = 0; i < category.length; i++) {
        await db.models.Categories.create(category[i])
    }
}

const dataUser = {
    username: 'admin',
    password: 'admin'
}

const dataCategory = [
    {
        name: 'Tuyên Truyền Cổ Động - Văn Hoá'
    },
    {
        name: 'Nghệ Thuật Quần Chúng'
    },
    {
        name: 'Hoạt Động Tuyên Truyền'
    },
    {
        name: 'Kịch Bản Tuyên Truyền'
    },
    {
        name: 'Nghiệp Vụ Điện Ảnh'
    },
    {
        name: 'Văn Bản Chỉ Đạo - Điều Hành'
    },
    {
        name: 'Khẩu Lệnh'
    },
    {
        name: 'Bài Phát Thanh Bộ Triển Lãm'
    },
    {
        name: 'Bộ Tranh Cổ Động'
    },
]

createUser(dataUser)
createCategory(dataCategory)