"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionParams = void 0;
const logs_entity_1 = require("./src/entities/logs.entity");
const profile_entity_1 = require("./src/entities/profile.entity");
const roles_entity_1 = require("./src/entities/roles.entity");
const user_entity_1 = require("./src/entities/user.entity");
const typeorm_1 = require("typeorm");
const fs = require("fs");
const dotenv = require("dotenv");
function getEnv(env) {
    if (fs.existsSync(env)) {
        return dotenv.parse(fs.readFileSync(env));
    }
}
function buildConnectionOptions() {
    const defaultConfig = getEnv(".env");
    const envConfig = getEnv(".env.${process.env.NODE_ENV || 'development'}");
    const config = { ...defaultConfig, ...envConfig };
}
exports.connectionParams = {
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
exports.default = new typeorm_1.DataSource({
    ...exports.connectionParams,
    migrations: ["src/migrations/**"],
    subscribers: [],
});
//# sourceMappingURL=ormconfig.js.map