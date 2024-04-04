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
const config_enum_1 = require("./src/enum/config.enum");
function getEnv(env) {
    console.log('当前的env:' + env);
    if (fs.existsSync(env)) {
        console.log('当前的env存在');
        return dotenv.parse(fs.readFileSync(env));
    }
}
function buildConnectionOptions() {
    const defaultConfig = getEnv(".env");
    const envConfig = getEnv(`.env.${process.env.NODE_ENV || 'development'}`);
    const config = { ...defaultConfig, ...envConfig };
    console.log("当前的配置是:" + JSON.stringify(envConfig));
    return {
        type: config[config_enum_1.ConfigEnum.DB_TYPE],
        host: config[config_enum_1.ConfigEnum.DB_HOST],
        port: config[config_enum_1.ConfigEnum.DB_PORT],
        username: config[config_enum_1.ConfigEnum.DB_USERNAME],
        password: config[config_enum_1.ConfigEnum.DB_PASSWORD],
        database: config[config_enum_1.ConfigEnum.DB_DATABASE],
        entities: [user_entity_1.User, profile_entity_1.Profile, logs_entity_1.Logs, roles_entity_1.Roles],
        synchronize: true,
        logging: false,
    };
}
exports.connectionParams = buildConnectionOptions();
exports.default = new typeorm_1.DataSource({
    ...exports.connectionParams,
    migrations: ["src/migrations/**"],
    subscribers: [],
});
//# sourceMappingURL=ormconfig.js.map