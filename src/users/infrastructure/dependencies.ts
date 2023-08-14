import { emailSender, logger } from "../../shared/infrastructure/dependencies";
import { WelcomeMessageSender } from "../application/WelcomeMessageSender";
import { UserController } from "./rest-api/UserController";
import { InMemoryUserRepository } from "./user-repository/in-memory-user-repository";

const userRepository = new InMemoryUserRepository();
const welcomeMessageSender = new WelcomeMessageSender(userRepository,emailSender,logger);

export const userController = new UserController(welcomeMessageSender);