const categoryModel = require('../model/categoryModel');

class CategoryService {
    async getCategoryList () {
        return await categoryModel.findAll({
            where: {
                deleted_at: null
            }
        });
    }
    async updateCategory (info) {
        let { id, type } = info;
        await categoryModel.upsert({
            type,
            id
        })
        return await this.getCategoryList();
    }
    async deleteCategory (id) {
        await categoryModel.update({
            deleted_at: new Date().getTime()
        }, {
            where: {
                id
            }
        })
        return await this.getCategoryList();
    }
}

module.exports = new CategoryService();