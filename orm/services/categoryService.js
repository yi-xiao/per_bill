const categoryModel = require('../model/categoryModel');

class CategoryService {
    async getCategoryList () {
        return await categoryModel.findAll();
    }
    async updateCategory (info) {
        let { id, type } = info;
        return await categoryModel.upsert({
            type,
            id
        })
    }
}

module.exports = new CategoryService();