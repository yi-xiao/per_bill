const recordModel = require('../model/recordModel');
const categoryModel = require('../model/categoryModel');
const userModel = require('../model/userModel');
const mediaModel = require('../model/mediaModel');

//定义关联关系
// userModel.belongsTo(mediaModel, { foreignKey: 'avatar', as: 'avatar_info' });
recordModel.belongsTo(userModel,{foreignKey: 'user_id'});
recordModel.belongsTo(categoryModel,{foreignKey: 'category', as: 'category_info'});

class RecordService {
    async getRecordList () {
        return await recordModel.findAll(
            {
                include: [
                    {
                        model: userModel,
                        attributes: [
                            'id','name','nickName','avatar'
                        ],
                        include: [
                            {
                                model: mediaModel,
                                as: 'avatar_info',
                                attributes: ['id','path','name']
                            }
                        ]
                    },
                    {
                        model: categoryModel,
                        as: 'category_info'
                    },
                ],
                where: {
                    deleted_at: null
                },
                attributes: ['id','price','date','updated_at']
            }
        );
    }
    async getPersonRecordList () {
        return await recordModel.find({

        });
    }
    async createdPersonHistory(info) {
        let { user_id, price, category, date } = info;
        return await recordModel.create({
            user_id,
            category,
            price: price * 100,
            date,
            created_at: new Date().getTime(),
            updated_at: new Date().getTime()
        })
    }
    async updateRecord(info) {
        let { id, user_id, price, category,date } = info;
        return await recordModel.update({
            user_id,
            category,
            price: price * 100,
            date,
            updated_at: new Date().getTime()
        },{
            where: {
                id
            }
        })
    }
    async removeRecord({ id }) {
        return await recordModel.update({
            deleted_at: new Date().getTime()
        },{
            where: {
                id
            }
        })
    }
}

module.exports = new RecordService();