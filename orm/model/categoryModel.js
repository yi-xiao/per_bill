let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING } = Sequelize;

const categoryModel = Models.define('category',{
    type: STRING
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = categoryModel;