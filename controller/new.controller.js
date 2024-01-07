const db = require("../db/index");
const newService = require('../service/news.service')
const fs = require('fs').promises;

class NewController {
    async getAll(req, res) {
        const data = await newService.findAll();
        res.status(200).json({message: 'create success', data: data, status: 200})
    }

    async getById(req, res) {
        const id = req.params.id;
        const data = await newService.findById(id)
        res.status(200).json({message: 'create success', data: data, status: 200})
    }

    async   findByCategory(req, res) {
        const id = req.body.category_id
        console.log(id)
        const data = await newService.findByCategory(id)
        res.status(200).json({message: 'create success', data: data, status: 200})
    }

    async create(req, res) {
        const data = req.body;
        // const create = await newService.create(data);
        // if (create === 'category not found') {
        //     return res.status(400).json({message: 'category not found', status: 400})
        // }
        // res.status(200).json({message: 'create success', data: create, status: 200})
        try {
            const sections = req.body.sections;

            for (const section of sections) {
                if (section.type === 'text') {
                    console.log('Text section:', section.content);
                    // Lưu đoạn văn bản vào cơ sở dữ liệu
                } else if (section.type === 'image' || section.type === 'video') {
                    const fileBuffer = req.files.find(file => file.fieldname === 'sections' && file.originalname === section.file.name).buffer;
                    const fileName = `uploads/${section.type}s/${Date.now()}_${section.file.name}`;
                    await fs.writeFile(fileName, fileBuffer);

                    console.log(`${section.type} section saved:`, fileName);
                    // Lưu đường dẫn của ảnh hoặc video vào cơ sở dữ liệu
                }
            }

            res.status(201).json({ message: 'News created successfully' });
        } catch (error) {
            console.error('Error creating news:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;
        const update = await newService.update(id, data)
        res.status(200).json({message: 'create success', data: update, status: 200})
    }

    async delete(req, res) {
        const id = req.params.id;
        await newService.delete(id)
        res.status(200).json({ message: 'Entity deleted successfully', status: 200 });
    }
}

module.exports = new NewController();