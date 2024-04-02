import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Logs } from "src/entities/logs.entity";
import { Profile } from "src/entities/profile.entity";
import { Roles } from "src/entities/roles.entity";
import { User } from "src/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import * as fs from "fs";
import * as dotenv from "dotenv";
import { ConfigEnum } from "src/enum/config.enum";

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

  return {
    type: config[ConfigEnum.DB],
    host: config[ConfigEnum.DB_HOST],
    port: config[ConfigEnum.DB_PORT],
    username: config[ConfigEnum.DB_USERNAME],
    password: config[ConfigEnum.DB_PASSWORD],
    database: config[ConfigEnum.DB_DATABASE],
    entities: [User, Profile, Logs, Roles],
    //同步本地的schema与数据库 -》 初始化的时候去使用
    synchronize: true,
    logging: false,
  } as TypeOrmModuleOptions;
}

export const connectionParams = buildConnectionOptions();

export default new DataSource({
  ...connectionParams,
  migrations: ["src/migrations/**"],
  subscribers: [],
} as DataSourceOptions);
