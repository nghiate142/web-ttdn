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
        name: 'Tin Tức-Sự Kiện'
    },
    {
        name: 'Tuyên truyền Cổ Động'
    },
    {
        name: 'Nghệ Thuật Quần Chúng'
    },
    {
        name: 'Tuyên Truyền Lưu Động'
    },
    {
        name: 'Chiếu Phim-Lưu Động'
    },
]

createUser(dataUser)
createCategory(dataCategory)