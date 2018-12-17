const paydetailModel = require('../model/paydetailModel');
const categoryModel = require('../model/categoryModel');
const userModel = require('../model/userModel');

//定义关联关系
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
                        ]
                    },
                    {
                        model: categoryModel
                    },
                ],
                attributes: ['id','price','created_at']
            }
        );
    }
    async getPersonPaydetailList () {
        return await paydetailModel.find({

        });
    }
    async createdPersonHistory(info) {
        let { user_id, price, type } = info;
        return await paydetailModel.create({
            user_id,
            type,
            price: price * 100,
            created_at: new Date().getTime()
        })
    }
}

module.exports = new PaydetailService();