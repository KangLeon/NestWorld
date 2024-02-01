import { UserService } from './user.service';
export declare class UserController {
    private userService;
    private logger;
    constructor(userService: UserService);
    getUsers(): any;
    addUser(): any;
}
