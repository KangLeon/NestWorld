import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Logs } from "src/entities/logs.entity";
import { Profile } from "src/entities/profile.entity";
import { Roles } from "src/entities/roles.entity";
import { User } from "src/entities/user.entity";

export default {
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "Kangleon28",
  database: "testDB",
  entities: [User, Profile, Logs, Roles],
  //同步本地的schema与数据库 -》 初始化的时候去使用
  synchronize: true,
  logging: ["error"],
} as TypeOrmModuleOptions;
