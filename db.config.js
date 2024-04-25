module.exports = {
    HOST: "hjz.h.filess.io",
    USER: "mapdb_centthough",
    PASSWORD: "c1add8fe12fbe32c45cdf6fe972c6092400d74c0",
    DB: "mapdb_centthough",
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