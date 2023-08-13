"use strict";
import express from "express";

const bootstrap = () => {
    const server = express()
    
    server.use(express.json())


}

bootstrap()
