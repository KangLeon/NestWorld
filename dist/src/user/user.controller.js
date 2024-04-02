"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const config_1 = require("@nestjs/config");
let UserController = class UserController {
    constructor(userService, configService, logger) {
        this.userService = userService;
        this.configService = configService;
        this.logger = logger;
        this.logger.log("UserController init");
    }
    getUsers() {
        this.logger.log("请求 getUsers 成功");
        return this.userService.findAll();
    }
    getUserProfile() {
        return this.userService.findProfile(2);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)("/profile"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserController.prototype, "getUserProfile", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("user"),
    __param(2, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService, Object])
], UserController);
//# sourceMappingURL=user.controller.js.map