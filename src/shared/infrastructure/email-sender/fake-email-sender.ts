import { EmailSender } from "../../domain/EmailSender";
import { Logger } from "../../domain/Logger";

export class FakeEmailSender implements EmailSender{
    constructor(private readonly logger: Logger){}

    async sendMessage(email: string, text: string): Promise<void> {
        this.logger.info(`[FakeEmailSender] - Sending email to "${email}" : ${text}`)
    }
}