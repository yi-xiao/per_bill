const paydetailModel = require('../model/paydetailModel');
const categoryModel = require('../model/categoryModel');
const userModel = require('../model/userModel');
const mediaModel = require('../model/mediaModel');

//定义关联关系
// userModel.belongsTo(mediaModel, { foreignKey: 'avatar', as: 'avatar_info' });
paydetailModel.belongsTo(userModel,{foreignKey: 'user_id'});
paydetailModel.belongsTo(categoryModel,{foreignKey: 'type'});

class PaydetailService {
    async getPaydetailList () {
        return await paydetailModel.findAll(
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
                        model: categoryModel
                    },
                ],
                attributes: ['id','price','date','updated_at']
            }
        );
    }
    async getPersonPaydetailList () {
        return await paydetailModel.find({

        });
    }
    async createdPersonHistory(info) {
        let { user_id, price, type,date } = info;
        return await paydetailModel.create({
            user_id,
            type,
            price: price * 100,
            date,
            created_at: new Date().getTime(),
            updated_at: new Date().getTime()
        })
    }
}

module.exports = new PaydetailService();