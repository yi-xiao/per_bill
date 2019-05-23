let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING,DATE,INTEGER } = Sequelize;

const categoryModel = Models.define('category',{
    type: INTEGER,
    category: INTEGER,
    text: STRING,
    deleted_at: DATE
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = categoryModel;