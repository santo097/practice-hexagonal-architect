import { Request, Response } from "express";

import { WelcomeMessageSender } from "../../application/WelcomeMessageSender";

export class UserController{
    constructor(private readonly welcomeMessageSender: WelcomeMessageSender) {}

    async sendWelcomeMessage(req:Request, res:Response){
        const {id : userId} = req.params;
        await this.welcomeMessageSender.sendToUser(userId);
        res.status(200).send();
    }
}