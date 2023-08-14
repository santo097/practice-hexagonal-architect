import { User } from "./User";

export interface UserRepository {
    getById(id: string): Promise<User | null>
}