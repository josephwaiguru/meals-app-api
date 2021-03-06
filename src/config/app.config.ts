export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        mysql: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            synchronize: false,
            autoLoadEntities: true,
            migrations: ["dist/migrations/*{.ts,.js}"],
            migrationsTableName: "migrations_history",
            migrationsRun: true,
            entities: ["dist/**/*.entity{.ts,.js}"],
        }
    }
});