import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "tools",
    synchronize: true,
    logging: true,
    entities: ["./src/entities/*.ts"],
    subscribers: [],
    migrations: ["./src/database/migrations/*.ts"],
});

export { AppDataSource };
