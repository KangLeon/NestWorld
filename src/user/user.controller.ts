/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:47:05
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:55:47
 * @FilePath: /NestWorld/src/user/user.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Logger, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  private logger = new Logger(UserController.name)

  constructor(private userService: UserService) { 
    this.logger.log("UserController init")
  }
  

  @Get()
  getUsers(): any {
    this.logger.log("请求 getUsers 成功")
    return this.userService.getUsers();
  }

  @Post()
  addUser(): any {
    return this.userService.addUser();
  }
}
  