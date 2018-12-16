const userModel = require('../orm/model/userModel');

class UserService {
    async createUser (info) {
        let { name,nickName='',sex=0,age=0,avatar='' } = info;
        return await userModel.create({
            name,
            nickName: nickName ? nickName : null,
            sex,
            age,
            avatar: avatar ? avatar : null
        })
    }
    async getUserList () {
        return await userModel.findAll();
    }
    async updateUserInfo (info) {
        let { name,nickName,sex,age,avatar, user_id } = info;

        let options = {}
        options.name = name;
        if(nickName !== null) options.nickName = nickName;
        if(sex !== null) options.sex = sex;
        if(age !== null) options.age = age;
        if(avatar !== null) options.avatar = avatar;

        return await userModel.update(options,{
            where: {
                id: user_id
            }
        })
    }
}

module.exports = new UserService();