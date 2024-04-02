"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logs_entity_1 = require("./src/entities/logs.entity");
const profile_entity_1 = require("./src/entities/profile.entity");
const roles_entity_1 = require("./src/entities/roles.entity");
const user_entity_1 = require("./src/entities/user.entity");
exports.default = {
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "Kangleon28",
    database: "testDB",
    entities: [user_entity_1.User, profile_entity_1.Profile, logs_entity_1.Logs, roles_entity_1.Roles],
    synchronize: true,
    logging: ["error"],
};
//# sourceMappingURL=ormconfig.js.map