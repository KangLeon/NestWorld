"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/user.entity");
const profile_entiry_1 = require("./user/profile.entiry");
const logs_entity_1 = require("./logs/logs.entity");
const roles_entiry_1 = require("./roles/roles.entiry");
const logs_module_1 = require("./logs/logs.module");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./configuration");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "127.0.0.1",
                port: 3306,
                username: "root",
                password: "Kangleon28",
                database: "testDB",
                entities: [user_entity_1.User, profile_entiry_1.Profile, logs_entity_1.Logs, roles_entiry_1.Roles],
                synchronize: true,
                logging: ["error"],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            user_module_1.UserModule,
            logs_module_1.LogsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map