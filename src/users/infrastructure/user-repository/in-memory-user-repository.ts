import { User } from "../../domain/User";
import { UserRepository } from "../../domain/userRepository";
import { USERS } from "./users";

export class InMemoryUserRepository implements UserRepository {
    async getById(id: string): Promise<User | null> {
        const users = USERS.find((user) => user.id === id);

        if(!users){
            return null;
        }

        return new User(users.id, users.email, users.slackUserId);
    }
}