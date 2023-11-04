import dotenv from "dotenv";

dotenv.config();

export const config = {
    app: {
        env: process.env.ENV || "development",
        port: process.env.APP_PORT || 3000,
        country: "PE",
        version: "1.0.0",
    },
    db: {
        host: process.env.DB_HOST!,
        database: process.env.DB_NAME!,
        port: process.env.DB_PORT!,
        username: process.env.DB_USER!,
        password: process.env.DB_PASS!,
    },
    apis: {
        swapi: {
            url: "https://swapi.py4e.com/api",
        }
    },
};