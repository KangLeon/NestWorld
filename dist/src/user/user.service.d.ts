import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    find(username: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: Partial<User>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findProfile(id: number): Promise<User>;
}
