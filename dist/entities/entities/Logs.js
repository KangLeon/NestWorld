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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logs = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Logs = class Logs {
};
exports.Logs = Logs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Logs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "result" }),
    __metadata("design:type", Number)
], Logs.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "path", length: 255 }),
    __metadata("design:type", String)
], Logs.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "methods", length: 255 }),
    __metadata("design:type", String)
], Logs.prototype, "methods", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "data", length: 255 }),
    __metadata("design:type", String)
], Logs.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.logs, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "userId", referencedColumnName: "id" }]),
    __metadata("design:type", User_1.User)
], Logs.prototype, "user", void 0);
exports.Logs = Logs = __decorate([
    (0, typeorm_1.Entity)("logs", { schema: "testDB" })
], Logs);
//# sourceMappingURL=Logs.js.map