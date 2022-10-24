// typeorm databases
import {BaseEntity, Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
// signalize Entity
@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

}