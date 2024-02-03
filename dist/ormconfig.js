"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logs_entity_1 = require("./src/logs/logs.entity");
const roles_entiry_1 = require("./src/roles/roles.entiry");
const profile_entiry_1 = require("./src/user/profile.entiry");
const user_entity_1 = require("./src/user/user.entity");
exports.default = {
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "Kangleon28",
    database: "testDB",
    entities: [user_entity_1.User, profile_entiry_1.Profile, logs_entity_1.Logs, roles_entiry_1.Roles],
    synchronize: true,
    logging: ["error"],
};
//# sourceMappingURL=ormconfig.js.map