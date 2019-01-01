let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING,DATE,INTEGER } = Sequelize;

const UserModel = Models.define('user', {
    name: STRING,
    nickName: STRING,
    birth: DATE,
    sex: INTEGER,
    avatar: STRING,
    created_at: DATE,
    updated_at: DATE
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = UserModel;

