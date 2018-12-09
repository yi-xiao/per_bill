const mysql = require('mysql');
const config = require('../config/config');

const connection = mysql.createConnection({
    ...config.mysql
});

connection.connect();

const select = async (sql, fn) => {
    connection.query(sql, (err, rows) => {
        if(err)
            throw new Error(err)
        fn(rows);

        connection.end();
    })
};

module.exports = select;