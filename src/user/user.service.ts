/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:51:48
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:01:11
 * @FilePath: /NestWorld/src/user/user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return {
      code: 0,
      data: [],
      msg: '请求用户列表成功',
    };
  }

  addUser() {
    return {
      code: 0,
      data: {},
      msg: '新增用户成功',
    };
  }
}
