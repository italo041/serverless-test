import express, { Application } from "express";
import { config } from "./config";

const app: Application = express();

app.listen(config.app.port, () => console.log(`Listen on port ${config.app.port}`));

