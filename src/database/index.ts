import dotenv from "dotenv";
import { resolve } from "path";
import { DataSource } from "typeorm";

dotenv.config({
    path:
        process.env.NODE_ENV === "dev"
            ? resolve(__dirname, "..", "..", ".env.dev")
            : resolve(__dirname, "..", "..", ".env.prod"),
});

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "tools",
    synchronize: true,
    logging: true,
    entities: [process.env.TYPEORM_ENTITY ?? "./src/entities/*.ts"],
    subscribers: [],
    migrations: [
        process.env.TYPEORM_MIGRATION ?? "./src/database/migrations/*.ts",
    ],
});

export { AppDataSource };
