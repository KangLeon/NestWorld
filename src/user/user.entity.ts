import { Roles } from 'src/roles/roles.entiry';
import { Logs } from './../logs/logs.entity';
/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-02-01 22:25:23
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:01:35
 * @FilePath: /NestWorld/src/user/user.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column()
    password: string

    @OneToMany(() => Logs, (logs) => logs.user)
    logs: Logs[]

    @OneToMany(() => Roles, (roles) => roles.user)
    @JoinTable()
    roles: Roles[]
}