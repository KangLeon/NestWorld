/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:00:31
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:02:05
 * @FilePath: /NestWorld/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LogsModule } from "./logs/logs.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./configuration";
import ormconfig from "ormconfig";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    UserModule,
    LogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
