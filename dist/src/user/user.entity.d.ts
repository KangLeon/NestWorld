import { Roles } from 'src/roles/roles.entiry';
import { Logs } from './../logs/logs.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    logs: Logs[];
    roles: Roles[];
}
