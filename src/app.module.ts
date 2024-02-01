/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:00:31
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:02:05
 * @FilePath: /NestWorld/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Profile } from './user/profile.entiry';
import { Logs } from './logs/logs.entity';
import { Roles } from './roles/roles.entiry';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Kangleon28',
    database: 'testDB',
    entities: [User, Profile, Logs, Roles],
    //同步本地的schema与数据库 -》 初始化的时候去使用
    synchronize: true,
    logging: ['error'],
  }),UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
