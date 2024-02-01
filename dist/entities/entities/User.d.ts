import { Logs } from "./Logs";
import { Profile } from "./Profile";
export declare class User {
    id: number;
    username: string;
    password: string;
    logs: Logs[];
    profile: Profile;
}
