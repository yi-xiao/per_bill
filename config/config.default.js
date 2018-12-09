module.exports = {
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: '',
        password: ''
    },
    sequelize: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: '',
        password: '',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
}