let { Sequelize, Models } = require('../../model/Sequelize');
let { STRING, INTEGER, DATE } = Sequelize;

const statisticModel = Models.define('statistic',{
    user_id: INTEGER,
    extra: STRING,
    date: STRING,
    created_at: DATE,
    updated_at: DATE
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = statisticModel;