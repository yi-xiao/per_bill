let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING, INTEGER, DATE } = Sequelize;

const paydetailModel = Models.define('paydetail',{
    user_id: INTEGER,
    type: STRING,
    price: STRING,
    date: DATE,
    created_at: DATE,
    updated_at: DATE
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = paydetailModel;