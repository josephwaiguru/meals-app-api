module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "synchronize": false,
    "autoLoadEntities": true,
    "migrations": ["dist/migrations/*{.ts,.js}"],
    "migrationsTableName": "migrations_history",
    "migrationsRun": true,
    "entities": ["dist/**/*.entity{.ts,.js}"],
};