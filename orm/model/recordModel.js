let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING, INTEGER, DATE } = Sequelize;

const recordModel = Models.define('record',{
    user_id: INTEGER,
    category: STRING,
    price: STRING,
    date: DATE,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = recordModel;