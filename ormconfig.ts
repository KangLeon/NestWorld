import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Logs } from "src/entities/logs.entity";
import { Profile } from "src/entities/profile.entity";
import { Roles } from "src/entities/roles.entity";
import { User } from "src/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import * as fs from "fs";
import * as dotenv from "dotenv";

//通过环境变量读取不同的env文件
function getEnv(env: string): Record<string, unknown> {
  if (fs.existsSync(env)) {
    return dotenv.parse(fs.readFileSync(env));
  }
}

//通过dotEnv来解析不同的配置
function buildConnectionOptions() {
  const defaultConfig = getEnv(".env");
  const envConfig = getEnv(".env.${process.env.NODE_ENV || 'development'}");
  const config = { ...defaultConfig, ...envConfig };
}

export const connectionParams = {
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

export default new DataSource({
  ...connectionParams,
  migrations: ["src/migrations/**"],
  subscribers: [],
} as DataSourceOptions);
