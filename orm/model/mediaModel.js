let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING,DATE,INTEGER } = Sequelize;

const MediaModel = Models.define('media', {
    path: STRING,
    name: STRING,
    width: INTEGER,
    height: INTEGER,
    created_at: DATE
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = MediaModel;