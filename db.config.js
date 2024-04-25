module.exports = {
    HOST: "bkvkf4cbexisrgelywhx-mysql.services.clever-cloud.com",
    USER: "ublbvpqpechbjwbz",
    PASSWORD: "jaIo1UofAtX4U1rTQ0SY",
    DB: "bkvkf4cbexisrgelywhx",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectedUnauthorized: false,
        },
        keepAlive: true,
    },
    ssl: true
};