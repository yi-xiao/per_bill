let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING,DATE } = Sequelize;

const categoryModel = Models.define('category',{
    type: STRING,
    deleted_at: DATE
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = categoryModel;