//import { ManagerEntity } from "src/manager/manager.entity";
import {  BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn,Unique } from "typeorm";


@Entity("customer")
export class CustomerEntity{

    @PrimaryGeneratedColumn() 
    customerId: string;
    @Column({unique:true})
    email: string;
    @Column()
    password: string;
    @Column()
    phone: string;
    @Column()
    name: string;
    @Column()
    address: string;
    
    @Column()
    filename: string;

    // @OneToOne(() => Profile, profile => profile.user)
    // profile: Profile;

    // @OneToMany(() => Order, order => order.user)
    // orders: Order[];

    // @OneToOne(() => Cart, cart => cart.user)
    // cart: Cart;
    
}
