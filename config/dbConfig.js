module.exports = {
    HOST: 'localhost',
    USER: 'admin',
    PASSWORD: 'admin123',
    DB: 'NODE_SEQUELIZE_API_DB',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

}