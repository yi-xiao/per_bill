const mysql = require('mysql');

const options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: ''
};

const connection = mysql.createConnection({
    ...options
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