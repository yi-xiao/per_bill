const userModel = require('../model/userModel');
const mediaModel = require('../model/mediaModel');

userModel.belongsTo(mediaModel, { foreignKey: 'avatar', as: 'avatar_info' });

class UserService {
    async createUser (info) {
        let { name,nickName='',sex=0,birth,avatar='' } = info;
        return await userModel.create({
            name,
            nickName: nickName ? nickName : null,
            sex,
            birth,
            avatar: avatar ? avatar : null
        })
    }
    async getUserList () {
        return await userModel.findAll({
            include: [
                {
                    model: mediaModel,
                    as: 'avatar_info',
                    attributes: ['id','path','name']
                }
            ]
        });
    }
    async updateUserInfo (info) {
        let { name,nickName,sex,birth,avatar, user_id } = info;

        let options = {}
        options.name = name;
        if(nickName !== null) options.nickName = nickName;
        if(sex !== null) options.sex = sex;
        if(birth !== null) options.birth = birth;
        if(avatar !== null) options.avatar = avatar;

        return await userModel.update(options,{
            where: {
                id: user_id
            }
        })
    }
}

module.exports = new UserService();