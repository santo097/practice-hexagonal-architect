"use strict";
import express from "express";
import "./shared/infrastructure/load-env-vars";
import { config } from "./shared/infrastructure/config";
import { userRouter } from "./users/infrastructure/rest-api/UserRouter";

const bootstrap = () => {
    const server = express()

    server.use(express.json())

    server.use("/users", userRouter)

    const { port } = config.server;
    
    server.listen(port, () => {
        console.log(`[APP] - Starting application on port ${port}`);
      });

}

bootstrap()
